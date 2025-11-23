import { Router } from "express";
import { userController } from "../controller/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { authController } from "../controller/auth.controller";


export const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get('/me', userController.getMyBasicInfo);

userRouter.put('/me', userController.updateMyBasicInfo);

userRouter.put('/me/password', userController.changePassword);

userRouter.delete('/me', userController.deleteMyAccount);


