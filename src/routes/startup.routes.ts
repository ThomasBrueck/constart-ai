import { Router } from "express";
import { authMiddleware } from '../middleware/auth.middleware';
import { startupController } from "../controller/startup.controller";
import { memberController } from "../controller/member.controller";


export const startupRouter = Router();

// public routes
startupRouter.get('/', startupController.getAll);

startupRouter.get('/:id', startupController.getProfileById);

// private routes

startupRouter.put('/profile', authMiddleware, startupController.updateProfile);

startupRouter.get('/profile/me', authMiddleware, startupController.getMyProfile);

startupRouter.get('/:id/members', authMiddleware, memberController.findAllMembersByStartupId);

startupRouter.get('/:id/members/:memberId', authMiddleware, memberController.findMemberById);