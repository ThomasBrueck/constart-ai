import { NextFunction, Request, Response } from "express";
import { companyService } from "../services/company.service";
import { stripeService } from "../services/stripe.service";
import { AppError } from "../utils/appError";
import { prisma } from "../config/prisma.client";
import { CompanyInfo } from "../../generated/prisma/client";

class StripeController {

    async createCheckout(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            const { plan } = req.body;

            if (!userId) {
                return res.status(400).json({ 
                    message: 'user id not found',
                });
            }

            if (!plan || !['BASIC', 'PRO'].includes(plan)) {
                return res.status(400).json({
                    message: 'invalid plan. Must be BASIC or PRO',
                });
            }

            const successUrl = `${process.env.FRONTEND_URL}/billing?payment=success`;
            const cancelUrl = `${process.env.FRONTEND_URL}/billing?payment=canceled`;

            const company: CompanyInfo | null = await prisma.companyInfo.findFirst({
                where: { userId: userId },
            });

            if (!company) {
                return res.status(400).json({
                    message: 'company not found',
                });
            }

            const session = await stripeService.createCheckoutSession(
                company.id, 
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
            const companyId: number = req.user?.userId;

            if (!companyId) {
                return res.status(400).json({
                    message: 'company id not found',
                });
            }

            const company = await companyService.getCompanyByUserId(companyId);

            if (!company.stripeSubscriptionId) {
                throw new AppError('no stripe subscription id found', 404);
            }

            const subscriptionId = await stripeService.getSubscription(company.stripeSubscriptionId);

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