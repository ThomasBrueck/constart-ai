import type { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { UserInputUpdate } from "../interfaces/user.interface";
import { User } from "../../generated/prisma";

class UserController {

    async getMyBasicInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const basicInfoUser: User | null = await userService.getMyBasicInformation(userId);

            return res.status(200).json({
                data: basicInfoUser,
            });


        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async updateMyBasicInfo(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            const data: UserInputUpdate = req.body;

            const updatedUser = await userService.updateMyBasicInfo(data, userId);

            return res.status(200).json({
                data: updatedUser,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
 
    async changePassword(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const newPassword: string = req.body.password;
            const confirmPassword: string = req.body.confirmPassword;

            const approveChange: boolean = await userService.changePassword(newPassword, confirmPassword, userId);

            if (!approveChange) return res.status(500).json({ message: 'internal server error '});

            return res.status(200).json({
                message: 'password changed succesfully',
            });


        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async deleteMyAccount(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const approve: boolean = await userService.deleteAccount(userId);

            if (!approve) return res.status(500).json({ message: 'internal server error' });

            return res.status(200).json({
                message: 'account deleted succesfully',
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }




}

export const userController = new UserController();