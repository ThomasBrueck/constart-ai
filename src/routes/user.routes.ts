import { Router } from "express";
import { userController } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { authController } from "../controller/auth.controller";


export const userRouter = Router();

userRouter.post('/register', authController.register);

userRouter.post('/login', authController.login);

