import { CompanyInfo, PlanStatus } from "../../generated/prisma/client";
import { prisma } from "../config/prisma.client";
import { AppError } from "../utils/appError";
import { companyService } from "./company.service";

class PlanService {
    private readonly PLAN_LIMITS = {
        FREE: 3,
        BASIC: 50,
        PRO: 9999999,
    }

    async canSearch(companyId: number): Promise<{ canSearch: boolean, remaining: number; reason?: string }> {
        try {
            const company = await prisma.companyInfo.findUnique({
                where: { id: companyId },
            });

            if (!company) {
                throw new AppError('company not found', 404);
            }

            if (company.planStatus === PlanStatus.CANCELLED && company.planExpiresAt) {
                if (new Date() >= company.planExpiresAt) {
                    await this.executePlanCancellation(companyId);
                    return {
                        canSearch: false,
                        remaining: 0,
                        reason: 'Your plan has expired. Please renew to continue searching.',
                    };
                }
            }

            await this.resetMonthlySearchesIfNeeded(companyId);

            const remaining = company.searchesRemaining;

            if (remaining <= 0) {
                return {
                    canSearch: false,
                    remaining: 0,
                    reason: `you have reached your ${company.plan} plan limit. Upgrade to continue searching...`,
                };
            }

            return {
                canSearch: true,
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

    async resetMonthlySearchesIfNeeded(companyId: number): Promise<void> {
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
                    planStatus: PlanStatus.ACTIVE,
                    searchesUsed: 0,
                    searchesRemaining: limit,
                    lastSearchReset: new Date(),
                    stripeCustomerId,
                    stripeSubscriptionId,
                    planCancelledAt: null,
                    planExpiresAt: null,
                }
            });

            return company;

        } catch(error) {
            throw error;
        }
    }

    async schedulePlanCancellation(companyId: number, periodEnd: Date): Promise<CompanyInfo> {
        try {
            const company = await prisma.companyInfo.update({
                where: { id: companyId },
                data: {
                    planStatus: PlanStatus.CANCELLED,
                    planCancelledAt: new Date(),
                    planExpiresAt: periodEnd,
                }
            });

            return company;

        } catch(error) {
            throw error;
        }
    }

    async executePlanCancellation(companyId: number): Promise<CompanyInfo> {
        try {
            const company = await prisma.companyInfo.update({
                where: { id: companyId },
                data: {
                    plan: 'FREE',
                    planStatus: PlanStatus.INACTIVE,
                    searchesRemaining: this.PLAN_LIMITS.FREE,
                    searchesUsed: 0,
                    lastSearchReset: new Date(),
                    stripeSubscriptionId: null,
                    planCancelledAt: null,
                    planExpiresAt: null,
                }
            });

            return company;

        } catch(error) {
            throw error;
        }
    }

    async getCompanyPlanInfo(userId: number) {
        try {

            const company: CompanyInfo | null = await companyService.getCompanyByUserId(userId);
            
            if (!company) {
                throw new AppError('company does not exist', 404);
            }

            const info = await prisma.companyInfo.findUnique({
                where: { id: company.id },
                select: {
                    plan: true,
                    planStatus: true,
                    searchesUsed: true,
                    searchesRemaining: true,
                    lastSearchReset: true,
                    stripeCustomerId: true,
                    stripeSubscriptionId: true,
                    planCancelledAt: true,
                    planExpiresAt: true,
                }
            });

            if (!info) {
                throw new AppError('company info not found', 404);
            }

            return { ...info, limit: this.PLAN_LIMITS[info.plan] };

        } catch(error) {
            throw error;
        }
    }
}

export const planService = new PlanService();