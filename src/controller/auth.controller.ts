import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";

class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const token  = await authService.createUser(req.body);
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
            const approve: string = await authService.loginUser(req.body);

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

}

export const authController = new AuthController();
