import { CompanyInfo } from "../../generated/prisma/client";
import { prisma } from "../config/prisma.client";
import { AppError } from "../utils/appError";

class PlanService {
    private readonly PLAN_LIMITS = {
        FREE: 3,
        BASIC: 50,
        PRO: 9999999,
    }

    async canSearch(companyId: number): Promise<{ cansearch: boolean, remaining: number; reason?: string }> {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId },
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            await this.resetMonthlySearchesIfNeeded(companyId);

            const remaining = company.searchesRemaining;

            if (remaining <= 0) {
                return {
                    cansearch: false,
                    remaining: 0,
                    reason: `you have reached your ${company.plan} plan limit. Updgrade to continue searching...`,
                };
            }

            return {
                cansearch: true,
                remaining,
            };

        } catch(error) {
            throw error;
        }
    }

    async consumeSearch(companyId: number): Promise<{ remaining: number }> {
        try {
            const company = await prisma.companyInfo.update({
                where: { id: companyId },
                data: {
                    searchesUsed: { increment: 1 },
                    searchesRemaining: { decrement: 1 },
                },
            });

            return { remaining: company.searchesRemaining };

        } catch(error) {
            throw error;
        }
    }

    private async resetMonthlySearchesIfNeeded(companyId: number): Promise<void> {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId },
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            const now = new Date();
            const lastReset = new Date(company.lastSearchReset);

            const daysSinceReset = Math.floor((now.getTime() - lastReset.getTime()) / (1000 * 60 * 60 * 24));

            if (daysSinceReset >= 30) {
                const limit = this.PLAN_LIMITS[company.plan];

                await prisma.companyInfo.update({
                    where: { id: companyId },
                    data: {
                        searchesUsed: 0,
                        searchesRemaining: limit,
                        lastSearchReset: now,
                    }
                });
            }

        } catch(error) {
            throw error;
        }
    }

    async updateCompanyPlan(companyId: number, plan: 'FREE' | 'BASIC' | 'PRO', stripeCustomerId: string, stripeSubscriptionId: string): Promise<CompanyInfo> {
        try {
            const limit = this.PLAN_LIMITS[plan];

            const company = await prisma.companyInfo.update({
                where: { id: companyId },
                data: {
                    plan,
                    planStatus: 'ACTIVE',
                    searchesUsed: 0,
                    lastSearchReset: new Date(),
                    stripeCustomerId,
                    stripeSubscriptionId,
                }
            });

            return company;

        } catch(error) {
            throw error;
        }
    }

    async cancelCompanyPlan(companyId: number): Promise<CompanyInfo> {
        try {
            const company = await prisma.companyInfo.update({
                where: { id: companyId },
                data: {
                    plan: 'FREE',
                    planStatus: 'INACTIVE',
                    searchesRemaining: this.PLAN_LIMITS.FREE,
                    searchesUsed: 0,
                    lastSearchReset: new Date(),
                    stripeSubscriptionId: null,
                }
            });

            return company;

        } catch(error) {
            throw error;
        }
    }

    async getCompanyPlanInfo(companyId: number) {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId },
                select: {
                    plan: true,
                    planStatus: true,
                    searchesUsed: true,
                    searchesRemaining: true,
                    lastSearchReset: true,
                    stripeCustomerId: true,
                    stripeSubscriptionId: true,
                }
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            return { ...company, limit: this.PLAN_LIMITS[company.plan] };

        } catch(error) {
            throw error;
        }
    }
}

export const planService = new PlanService();