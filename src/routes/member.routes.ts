import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { memberController } from "../controller/member.controller";
import { roleMiddleware } from '../middleware/role.middleware';

export const memberRouter = Router();

memberRouter.use(authMiddleware);

memberRouter.post('/create', roleMiddleware(['STARTUP']), memberController.createMember);

memberRouter.delete('/:memberId', roleMiddleware(['STARTUP']), memberController.deletememberById);