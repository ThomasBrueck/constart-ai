import { Router } from "express";
import express from 'express';
import { stripeController } from "../controller/stripe.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { roleMiddleware } from "../middleware/role.middleware";

export const stripeRouter = Router();

stripeRouter.use(authMiddleware);

stripeRouter.post('/create-checkout', roleMiddleware(['COMPANY']), stripeController.createCheckout);

stripeRouter.get('/subscription', roleMiddleware(['COMPANY']), stripeController.getSubscription);

stripeRouter.post('/cancel-subscription', roleMiddleware(['COMPANY']), stripeController.cancelSubscription);