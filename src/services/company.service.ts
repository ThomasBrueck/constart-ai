import { CompanyInfo, User } from "../../generated/prisma/client";
import { prisma } from "../config/prisma.client";
import { CompanyInputUpdate } from "../interfaces/company.interface";
import { AppError } from "../utils/appError";

class CompanyService {

    async createProfile(userId: number): Promise<CompanyInfo> {
        try {
            const user: User | null = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) throw new AppError('user does not exist', 404);

            const companyProfile: CompanyInfo = await prisma.companyInfo.create({
                data: {
                    userId: userId,
                    plan: "FREE",
                    planStatus: "INACTIVE",
                },

            });

            return companyProfile;

        } catch(error) {
            throw error;
        }
    }

    async updateProfile(data: CompanyInputUpdate, userId: number): Promise<CompanyInfo> {
        try {
            const companyInfo: CompanyInfo | null = await prisma.companyInfo.update({
                where: { userId: userId },
                data: {
                    industry: data.industry,
                    size: data.size,
                    companyType: data.companyType,
                    website: data.website,
                }
            });

            if (!companyInfo) throw new AppError('company info does not exist', 400);

            return companyInfo;

        } catch(error) {
            throw error;
        }
    }
}

export const companyService = new CompanyService();