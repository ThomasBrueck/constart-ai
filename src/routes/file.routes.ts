import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import upload from "../middleware/multer.middleware";
import { fileController } from "../controller/file.controller";

export const fileRouter = Router();

fileRouter.use(authMiddleware);

fileRouter.post('/logo', upload.single('logo'), fileController.uploadLogo);

fileRouter.post('/profile_image/:id', upload.single('profile_image'), fileController.uploadProfileImage);