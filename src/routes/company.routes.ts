import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { companyController } from "../controller/company.controller";
import { roleMiddleware } from '../middleware/role.middleware';

export const companyRouter = Router();

companyRouter.use(authMiddleware);

companyRouter.put('/me', roleMiddleware(['COMPANY']), companyController.updateProfile);