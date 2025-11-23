import { NextFunction, Request, Response } from "express";
import { CompanyInfo } from "../../generated/prisma/client";
import { companyService } from "../services/company.service";
import { CompanyInputUpdate } from "../interfaces/company.interface";

class CompanyController {

    async updateProfile(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;
            const data: CompanyInputUpdate = req.body;

            if (!userId) {
                return res.status(400).json({
                    message: 'user id is required',
                });
            }

            const companyInfo: CompanyInfo = await companyService.updateProfile(data, userId);

            return res.status(200).json({
                data: companyInfo,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const companyController = new CompanyController();