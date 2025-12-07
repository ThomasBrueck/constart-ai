import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { companyController } from "../controller/company.controller";
import { roleMiddleware } from '../middleware/role.middleware';
import { planService } from "../services/plan.service";

export const companyRouter = Router();

companyRouter.use(authMiddleware);

companyRouter.put('/me', roleMiddleware(['COMPANY']), companyController.updateProfile);

companyRouter.get('/me', roleMiddleware(['COMPANY']), companyController.getCompanyPlanInfo);