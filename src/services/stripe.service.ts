import Stripe from "stripe";
import { AppError } from "../utils/appError";
import { planService } from "./plan.service";
import { prisma } from "../config/prisma.client";
import { CompanyInfo } from '../../generated/prisma/client';

class StripeService {
    private readonly stripe: Stripe;

    private readonly PLAN_PRICES = {
        BASIC: 2900,
        PRO: 9900,
    };

    constructor(){
        if (!process.env.STRIPE_SECRET_KEY) {
            throw new AppError('STRIPE_SECRET_KEY must be defined in enviroment variables', 500);
        }

        this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
    }

    async createCheckoutSession(companyId: number, plan: 'BASIC' | 'PRO', succesUrl: string, cancelUrl: string) {
        try {
            const session = await this.stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: `${plan} Plan`,
                                description: plan === 'BASIC' ? '50 AI searches per month' : 'Unlimited AI searches per month',
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
                success_url: succesUrl,
                cancel_url: cancelUrl,

                // information to know the status of the payment with the company who made it
                metadata: {
                    companyId: companyId.toString(),
                    plan: plan,
                }
            });

            return session;

        } catch(error) {
            throw error;
        }
    }

    async handleStripeWebhook(payload: string | Buffer, signature: string): Promise<void> {
        const webhookSecret = process.env.WEBHOOK_SECRET_KEY || '123';

        if (!webhookSecret) {
            throw new AppError('STRIPE WEBHOOK KEY not configured', 500);
        }

        let event: Stripe.Event;

        try {
            event = this.stripe.webhooks.constructEvent(payload, signature, webhookSecret);

        } catch(error) {
            throw error;
        }

        switch (event.type) {
            case 'checkout.session.completed':
                const session = event.data.object as Stripe.Checkout.Session;
                await this.handleCheckoutComplete(session);
                break;

            case 'customer.subscription.updated':
                const subscription = event.data.object as Stripe.Subscription;
                await this.handleSusbscriptionUpdate(subscription);
                break;

            case 'customer.subscription.deleted':
                const deletedSub = event.data.object as Stripe.Subscription;
                await this.handleSubscriptionCanceled(deletedSub);
                break;

            case 'invoice.payment_succeeded':
                const paidInvoice = event.data.object as Stripe.Invoice;
                await this.handlePaymentSucceeded(paidInvoice);
                break;

            case 'invoice.payment_failed':
                const failedInvoice = event.data.object as Stripe.Invoice;
                await this.handlePaymentFailed(failedInvoice);
                break;

            default:
                throw new AppError(`unhandled event type: ${event.type}`, 500);
        }

    }

    private async handleCheckoutComplete(session: Stripe.Checkout.Session) {
        try {
            const companyId = parseInt(session.metadata?.companyId || '0');
            const plan = session.metadata?.plan as 'BASIC' | 'PRO';

            if (!companyId || !plan) {
                throw new AppError('missing metadata in checkout session', 500);
            }

            await planService.updateCompanyPlan(companyId, plan, session.customer as string, session.subscription as string);

        } catch(error) {
            throw error;
        }
    }

    private async handleSusbscriptionUpdate(subscription: Stripe.Subscription) {
        try {
            const customerId = subscription.customer.toString();

            const company = await prisma.companyInfo.findFirst({
                where: { stripeCustomerId: customerId },
                include: { user: true },
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            if (subscription.status === 'active') {
                await prisma.companyInfo.update({
                    where: { id: company.id },
                    data: { planStatus: 'ACTIVE' },
                });

            } else if (subscription.status === 'canceled') {
                await planService.cancelCompanyPlan(company.id);

            } else if (subscription.status === 'unpaid') {
                await prisma.companyInfo.update({
                    where: { id: company.id },
                    data: { planStatus: 'INACTIVE'},
                });
            }

        } catch(error) {
            throw error;
        }
    }

    private async handleSubscriptionCanceled(subscription: Stripe.Subscription) {
        try {
            const customerId = subscription.customer.toString();

            const customerIdNmb = parseInt(customerId);

            await planService.cancelCompanyPlan(customerIdNmb);

        } catch (error) {
            throw error;
        }
    }

    private async handlePaymentSucceeded(invoice: Stripe.Invoice) {
        try {
            const customerId = invoice.customer?.toString();

            if (!customerId) {
                return;
            }

            const company = await prisma.companyInfo.findFirst({
                where: { stripeSubscriptionId: customerId },
            });

            if (!company) {
                return;
            }

            await planService.resetMonthlySearchesIfNeeded(company.id);

            await prisma.companyInfo.update({
                where: { id: company.id },
                data: { planStatus: 'ACTIVE' },
            });

        } catch (error) {
            throw error;
        }
    }

    private async handlePaymentFailed(invoice: Stripe.Invoice) {
        try {
            const customerId = invoice.customer as string;

            const company = await prisma.companyInfo.findFirst({
                where: { stripeCustomerId: customerId },
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            await prisma.companyInfo.update({
                where: { id: company.id },
                data: { planStatus: 'INACTIVE' },
            });

        } catch (error) {
            throw error;
        }
    }

    async cancelSubscription(subscriptionId: string) {
        try {
            const subscription = await this.stripe.subscriptions.cancel(subscriptionId);

            return subscription;
        } catch (error) {
            throw error;
        }
    }

    async getSubscription(subscriptionId: string) {
        try {
            return await this.stripe.subscriptions.retrieve(subscriptionId);

        } catch (error) {
            throw error;
        }
    }
}

export const stripeService = new StripeService();