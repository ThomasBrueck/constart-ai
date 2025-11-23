import { NextFunction, Request, Response } from "express";
import { fileService } from "../services/file.service";
import { prisma } from "../config/prisma.client";
import { userService } from "../services/user.service";

class FileController {

    async uploadLogo(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            const fileBuffer = req.file?.buffer;

            if (!fileBuffer) {
                return res.status(400).json({ message: 'file did not dropped'});
            }

            const logoUrl: string | undefined = await fileService.uploadLogo(fileBuffer, userId);

            const user = await userService.uploadLogo(userId, logoUrl);

            return res.status(200).json({
                message: 'logo succesfully upload',
                data: user,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const fileController = new FileController();