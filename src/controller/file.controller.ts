import { NextFunction, Request, Response } from "express";
import { fileService } from "../services/file.service";
import { prisma } from "../config/prisma.client";
import { userService } from "../services/user.service";
import { memberService } from "../services/member.service";
import { Member } from "../../generated/prisma/client";
import { startupService } from "../services/startup.service";

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

    async uploadProfileImage(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            const filebuffer = req.file?.buffer;
            const memberId: string | undefined = req.params.id;

            if (!memberId) {
                return res.status(400).json({
                    message: 'member id is required',
                });
            }

            const memberIdNmb: number = parseInt(memberId);

            const startup = await startupService.findByUserId(userId);

            if (!startup) {
                return res.status(404).json({
                    message: 'startup not found',
                });
            }
            
            const existMember: Member = await memberService.getMemberById(startup?.id, memberIdNmb);

            if (!existMember) {
                return res.status(404).json({
                    message: 'member not found',
                });
            }

            if (!filebuffer) {
                return res.status(400).json({
                    message: 'file did not dropped',
                });
            }
            
            const profileImageMember: string | undefined = await fileService.uploadProfileImage(filebuffer, userId, memberIdNmb);
            
            const memberUpdated: Member = await memberService.updloadProfileImage(userId, memberIdNmb, profileImageMember);

            if (!memberUpdated) {
                return res.status(500).json({
                    message: 'something went wrong uploading the profile image',
                });
            }

            return res.status(200).json({
                data: memberUpdated,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const fileController = new FileController();