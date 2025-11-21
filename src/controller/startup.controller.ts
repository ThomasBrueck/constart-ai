import type { StartupInfo } from "@prisma/client";
import type { NextFunction, Request, Response } from "express";
import { startupService } from "../services/startup.service";
import { StartupInfoInput } from "../interfaces/startup.interface";
import { start } from "repl";

class StartupController {

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {

            const startups: StartupInfo[] = await startupService.findAll();

            if (startups === null) {
                return res.status(200).json({
                    message: 'startups are empty',
                });
            }

            return res.status(200).json({
                data: startups,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async createOrUpdateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const startupData: StartupInfoInput = req.body;
            const userId: number = req.user?.userId;

            const startup: StartupInfo = await startupService.createOrUpdateProfile(startupData, userId);
            
            if (!startup) return res.status(404).json({
                message: 'something went wrong',
            });

            return res.status(200).json({
                message: 'succesfully created',
            });


        } catch (error) {
            console.error(error);
            next(error);
        }
    }

    async getMyProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const startupInfo: StartupInfo | null = await startupService.findByUserId(userId);

            return res.status(200).json({
                data: startupInfo,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async getProfileById(req: Request, res: Response, next: NextFunction) {
        try {
            const startupInfoId: string | undefined = req.params.id;
            
            if (!startupInfoId) {
                return res.status(400).json({
                    message: 'startup id is required or not found',
                });
            }

            const startupInfoIdNmb: number = parseInt(startupInfoId);

            const startupInfoData: StartupInfo = await startupService.findById(startupInfoIdNmb);

            return res.status(200).json({
                data: startupInfoData,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    
}

export const startupController = new StartupController();