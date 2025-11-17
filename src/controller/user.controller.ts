import type { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import type { User } from "@prisma/client";

class UserController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const token  = await userService.createUser(req.body);
            return res.status(200).json({
                message: "succesfully register",
            });

        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const approve: string = await userService.enter(req.body);

            if (approve) return res.status(200).json({
                token: approve,
            });

            return res.status(404).json({
                message: "invalid credentials"
            });

        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            
            const user: User | null = await userService.getProfile(userId);

            return res.status(200).json({
                data: {
                    username: user.username,
                    email: user.email,
                    createdAt: user.createdAt,
                }
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const userController = new UserController();