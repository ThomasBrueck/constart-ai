import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";
import { authService } from "../services/auth.service";
import { startupService } from "../services/startup.service";
import { StartupInfo } from "@prisma/client";
import { companyService } from "../services/company.service";

class AuthController {
    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const user  = await authService.createUser(req.body);
            
            // creating startupinfo or companyinfo
            if (user.role === 'STARTUP') {
                await startupService.createProfile(user.id);

            } else {
                // create companyInfo
                await companyService.createProfile(user.id);
            }

            return res.status(200).json({
                message: 'succesfully registered',
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
