import { NextFunction, Request, Response } from "express";
import { companyService } from "../services/company.service";
import { stripeService } from "../services/stripe.service";

class StripeController {

    async createCheckout(req: Request, res: Response, next: NextFunction) {
        try {
            const companyId: number = req.user?.userId;
            const { plan } = req.body;

            if (!companyId) {
                return res.status(400).json({ 
                    message: 'company id not found',
                });
            }

            if (!plan || !['BASIC', 'PRO'].includes(plan)) {
                return res.status(400).json({
                    message: 'invalid plan. Must be BASIC or PRO',
                });
            }

            const successUrl = `${process.env.FRONTEND_URL}/billing?payment=success`;
            const cancelUrl = `${process.env.FRONTEND_URL}/billing?payment=canceled`;

            const session = await stripeService.createCheckoutSession(
                companyId, 
                plan,
                successUrl,
                cancelUrl,
            );

            return res.status(200).json({
                message: 'checkout session created',
                data: {
                    sessionId: session.id,
                    url: session.url,
                }
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async webhook(req: Request, res: Response, next: NextFunction) {
        try {
            const signature = req.headers['stripe-signature'] as string;

            if (!signature) {
                return res.status(400).json({
                    message: 'missing stripe-signature header',
                });
            }

            await stripeService.handleStripeWebhook(req.body, signature);

            return res.status(200).json({
                received: true,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async getSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const companyId: string = req.user?.userId as string;

            if (!companyId) {
                return res.status(400).json({
                    message: 'company id not found',
                });
            }

            const subscriptionId = await stripeService.getSubscription(companyId);

            return res.status(200).json({
                data: subscriptionId,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async cancelSubscription(req: Request, res: Response, next: NextFunction) {
        try {
            const companyId: string = req.user?.userId;

            if (!companyId) {
                return res.status(400).json({
                    message: 'company id not found',
                });
            }

            const subscription = await stripeService.cancelSubscription(companyId);

            return res.status(200).json({
                message: 'subscriptioon will be canceled at the end of the billing period',
                data: {
                    cancelAt: subscription.cancel_at,
                    currentPeriodEnd: subscription.ended_at,
                },
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const stripeController = new StripeController();