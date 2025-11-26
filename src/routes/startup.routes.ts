import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware';
import { startupController } from "../controller/startup.controller";
import { memberController } from "../controller/member.controller";
import { roleMiddleware } from "../middleware/role.middleware";


export const startupRouter = Router();

// public routes
startupRouter.get('/', startupController.getAll);

startupRouter.get('/:id', startupController.getProfileById);

// private routes

startupRouter.put('/profile', authMiddleware, roleMiddleware(['STARTUP']), startupController.updateProfile);

startupRouter.get('/profile/me', authMiddleware, roleMiddleware(['STARTUP']),startupController.getMyProfile);

startupRouter.get('/:id/members', authMiddleware, memberController.findAllMembersByStartupId);

startupRouter.get('/:id/members/:memberId', authMiddleware, memberController.findMemberById);