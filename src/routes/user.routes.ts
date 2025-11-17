import { Router } from "express";
import { userController } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";


export const userRouter = Router();

userRouter.post('/register', userController.register);

userRouter.post('/login', userController.login);

userRouter.get('', authMiddleware, userController.getProfile);