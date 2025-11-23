import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { memberController } from "../controller/member.controller";

export const memberRouter = Router();

memberRouter.use(authMiddleware);

memberRouter.post('/create', memberController.createMember);

memberRouter.delete('/:memberId', memberController.deletememberById);