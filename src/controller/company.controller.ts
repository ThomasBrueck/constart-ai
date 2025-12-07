import { NextFunction, Request, Response } from "express";
import { CompanyInfo } from "../../generated/prisma/client";
import { companyService } from "../services/company.service";
import { CompanyInputUpdate } from "../interfaces/company.interface";
import { planService } from "../services/plan.service";

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

    async getCompanyPlanInfo(req: Request,  res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const info = await planService.getCompanyPlanInfo(userId);

            if (!info) {
                return res.status(404).json({
                    message: 'the company does not have plan',
                });
            }

            return res.status(200).json({
                data: info,
            });

        } catch (error) {
            console.error(error);
            next(error);
        }
    }
}

export const companyController = new CompanyController();