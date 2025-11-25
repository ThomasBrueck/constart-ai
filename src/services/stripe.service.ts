import Stripe from "stripe";
import { AppError } from "../utils/appError";

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

        switch(event.type) {
            case 'checkout.session.completed':
                const session = event.data.object as Stripe.Checkout.Session;
                
        }

    }

    private async handleCheckoutComplete(session: Stripe.Checkout.Session) {
        try {
            const companyId = parseInt(session.metadata?.companyId || '0');
            const plan = session.metadata?.plan as 'BASIC' | 'PRO';

            if (!companyId || !plan) {
                throw new AppError('missing metadata in checkout session', 500);
            }

            // continue and create planService.ts
            
        } catch(error) {
            throw error;
        }
    }


}