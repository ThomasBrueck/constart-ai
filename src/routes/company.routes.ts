import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { companyController } from "../controller/company.controller";

export const companyRouter = Router();

companyRouter.use(authMiddleware);

companyRouter.put('/me', companyController.updateProfile);