import Stripe from "stripe";
import { AppError } from "../utils/appError";
import { planService } from "./plan.service";
import { prisma } from "../config/prisma.client";
import { PlanStatus } from "../../generated/prisma/client";

interface StripeSubscriptionWithPeriod extends Stripe.Subscription {
    current_period_end: number;
}

class StripeService {
    private stripe: Stripe;
    private readonly PLAN_PRICES = {
        BASIC: 2999, // $9.99 en centavos
        PRO: 9999,  // $29.99 en centavos
    };

    constructor() {
        const stripeKey = process.env.STRIPE_SECRET_KEY;

        if (!stripeKey) throw new AppError('STRIPE KEY not provided', 500);

        this.stripe = new Stripe(stripeKey);
    }

    async createCheckoutSession(companyId: number, plan: 'BASIC' | 'PRO', successUrl: string, cancelUrl: string): Promise<Stripe.Checkout.Session> {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId }
            });

            const session = await this.stripe.checkout.sessions.create({
                customer: company?.stripeCustomerId || undefined,
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: `${plan} Plan`,
                                description: plan === 'BASIC' 
                                    ? 'Access to 50 searches per month'
                                    : 'Unlimited searches per month',
                            },
                            unit_amount: this.PLAN_PRICES[plan],
                            recurring: {
                                interval: 'month',
                            },
                        },
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                success_url: successUrl,
                cancel_url: cancelUrl,
                metadata: {
                    companyId: companyId.toString(),
                    plan,
                },
            });

            return session;
        } catch (error) {
            console.error(error);
            throw new AppError('Failed to create checkout session', 500);
        }
    }

    async getSubscription(subscriptionId: string): Promise<Stripe.Subscription> {
        try {
            const subscription = await this.stripe.subscriptions.retrieve(subscriptionId);
            return subscription;
        } catch (error) {
            console.error(error);
            throw new AppError('Failed to retrieve subscription', 500);
        }
    }

    async cancelSubscription(companyId: number): Promise<Stripe.Subscription | null> {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId }
            });

            if (!company?.stripeSubscriptionId) {
                throw new AppError('No active subscription found', 404);
            }

            const subscription = await this.stripe.subscriptions.retrieve(company.stripeSubscriptionId);

            if (subscription.cancel_at_period_end) {
                return null;
            }

            const updatedSubscription = await this.stripe.subscriptions.update(
                company.stripeSubscriptionId,
                { cancel_at_period_end: true }
            );

            // Validar que current_period_end exista y sea válido
            const currentPeriodEnd = (updatedSubscription as any).current_period_end;
            if (!currentPeriodEnd || typeof currentPeriodEnd !== 'number') {
                throw new AppError('Invalid subscription period end', 500);
            }

            const periodEnd = new Date(currentPeriodEnd * 1000);
            
            // Validar que la fecha sea válida
            if (isNaN(periodEnd.getTime())) {
                throw new AppError('Invalid date conversion', 500);
            }

            await planService.schedulePlanCancellation(companyId, periodEnd);

            return updatedSubscription;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async handleStripeWebhook(payload: string | Buffer, signature: string): Promise<void> {
        const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

        if (!webhookSecret) {
            throw new AppError('STRIPE WEBHOOK KEY not configured', 500);
        }

        let event: Stripe.Event;

        try {
            event = await this.stripe.webhooks.constructEventAsync(payload, signature, webhookSecret);
        } catch(error) {
            console.error(error);
            throw error;
        }

        const existingEvent = await prisma.stripeWebhookEvent.findUnique({
            where: { id: event.id }
        });

        if (existingEvent) {
            console.log(`Webhook ${event.id} already processed`);
            return;
        }

        try {
            switch (event.type) {
                case 'checkout.session.completed':
                    const session = event.data.object as Stripe.Checkout.Session;
                    await this.handleCheckoutComplete(session);
                    break;

                case 'customer.subscription.updated':
                    const subscription = event.data.object as Stripe.Subscription;
                    await this.handleSubscriptionUpdated(subscription);
                    break;

                case 'customer.subscription.deleted':
                    const deletedSubscription = event.data.object as Stripe.Subscription;
                    await this.handleSubscriptionDeleted(deletedSubscription);
                    break;

                case 'invoice.payment_succeeded':
                    const invoice = event.data.object as Stripe.Invoice;
                    await this.handleInvoicePaymentSucceeded(invoice);
                    break;

                case 'invoice.payment_failed':
                    const failedInvoice = event.data.object as Stripe.Invoice;
                    await this.handleInvoicePaymentFailed(failedInvoice);
                    break;
            }

            await prisma.stripeWebhookEvent.create({
                data: {
                    id: event.id,
                    type: event.type,
                }
            });

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    private async handleCheckoutComplete(session: Stripe.Checkout.Session): Promise<void> {
        const companyId = parseInt(session.metadata?.companyId || '0');
        const plan = session.metadata?.plan as 'BASIC' | 'PRO';
        const customerId = session.customer as string;
        const subscriptionId = session.subscription as string;

        if (!companyId || !plan) {
            console.error('Missing metadata in checkout session');
            return;
        }

        await planService.updateCompanyPlan(companyId, plan, customerId, subscriptionId);
        console.log(`Plan updated for company ${companyId}: ${plan}`);
    }

    private async handleSubscriptionUpdated(subscription: Stripe.Subscription): Promise<void> {
        const company = await prisma.companyInfo.findFirst({
            where: { stripeCustomerId: subscription.customer as string }
        });

        if (!company) {
            console.error('Company not found for customer:', subscription.customer);
            return;
        }

        if (subscription.cancel_at_period_end && subscription.status === 'active') {
            const currentPeriodEnd = (subscription as any).current_period_end;
            
            if (!currentPeriodEnd || typeof currentPeriodEnd !== 'number') {
                console.error('Invalid current_period_end for subscription');
                return;
            }

            const periodEnd = new Date(currentPeriodEnd * 1000);
            
            if (isNaN(periodEnd.getTime())) {
                console.error('Invalid date conversion for subscription');
                return;
            }

            await planService.schedulePlanCancellation(company.id, periodEnd);
            console.log(`Cancellation scheduled for company ${company.id} at ${periodEnd}`);
            return;
        }

        if (subscription.status === 'active' && !subscription.cancel_at_period_end) {
            await prisma.companyInfo.update({
                where: { id: company.id },
                data: { 
                    planStatus: PlanStatus.ACTIVE,
                    planCancelledAt: null,
                    planExpiresAt: null,
                }
            });
        }
    }

    private async handleSubscriptionDeleted(subscription: Stripe.Subscription): Promise<void> {
        const company = await prisma.companyInfo.findFirst({
            where: { stripeCustomerId: subscription.customer as string }
        });

        if (!company) {
            console.error('Company not found');
            return;
        }

        await planService.executePlanCancellation(company.id);
    }

    private async handleInvoicePaymentSucceeded(invoice: Stripe.Invoice): Promise<void> {
        const subscriptionId = invoice.lines?.data?.[0]?.subscription as string | undefined;

        if (!subscriptionId) return;

        const company = await prisma.companyInfo.findFirst({
            where: { stripeSubscriptionId: subscriptionId }
        });

        if (!company) return;

        await planService.resetMonthlySearchesIfNeeded(company.id);
    }

    private async handleInvoicePaymentFailed(invoice: Stripe.Invoice): Promise<void> {
        const customerId = invoice.customer as string | undefined;

        if (!customerId) return;

        const company = await prisma.companyInfo.findFirst({
            where: { stripeCustomerId: customerId }
        });

        if (!company) return;

        await prisma.companyInfo.update({
            where: { id: company.id },
            data: { planStatus: PlanStatus.INACTIVE }
        });
    }
}

export const stripeService = new StripeService();