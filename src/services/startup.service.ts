import { AppError, NotFoundError } from "../utils/appError";
import { StartupInfoInputUpdate } from '../interfaces/startup.interface';
import { prisma } from "../config/prisma.client";
import { Prisma, StartupInfo } from "../../generated/prisma/client";
import { searchService } from "./search.service";

class StartupService {

    async findAll(): Promise<StartupInfo[]> {
        try {

            return await prisma.startupInfo.findMany({
                include: {
                    user: true,
                    members: true,
                }
            });

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createProfile(userId: number): Promise<StartupInfo> {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) throw new AppError('user not found', 404);

            return await prisma.startupInfo.create({
                data: {
                    userId: userId,
                },
            });

        } catch(error) {
            throw error;
        }
    }

    async updateProfile(data: StartupInfoInputUpdate, userId: number): Promise<StartupInfo> {
        try {
            const startup = await prisma.startupInfo.findUnique({
                where: { userId},
                include: {
                    members: true,
                    user: true,
                }
            });

            if (!startup) throw new AppError('startup not found', 404);

            if (data.visible) {
                
                // Information in startupInfo table
                const finalDemoVideo = data.demoVideo ?? startup.demoVideo;
                const finalMonthlyUsers = data.monthlyUsersAverage ?? startup.monthlyUsersAverage;
                const finalTeamSize = data.teamSize ?? startup.teamSize;
                const finalIndustry = data.industry ?? startup.industry;
                const finalFoundedYear = data.foundedYear ?? startup.foundedYear;
                const finalContactEmail = data.contactEmail ?? startup.contactEmail;

                if (!finalDemoVideo) {
                    throw new AppError('You need to upload a demo video before making profile visible', 400);
                }
                if (!finalMonthlyUsers) {
                    throw new AppError('You need to specify monthly users average before making profile visible', 400);
                }
                if (!finalTeamSize || finalTeamSize === 0) {
                    throw new AppError('You need to specify team size before making profile visible', 400);
                }
                if (!finalIndustry) {
                    throw new AppError('You need to choose an industry before making profile visible', 400);
                }
                if (!finalFoundedYear || finalFoundedYear === 0) {
                    throw new AppError('You need to specify founded year before making profile visible', 400);
                }
                if (startup.members.length === 0) {
                    throw new AppError('You need to add at least one team member before making profile visible', 400);
                }
                if (!finalContactEmail) {
                    throw new AppError('You need to add you contact email before making profile visible', 400);
                }
                if (!startup.user.description) {
                    throw new AppError('You need to add your startup description', 400);
                }
                if (!startup.user.website) {
                    throw new AppError('You need to add your startup website', 400);
                }
            }

            // update embedding for future searches of companies
            await searchService.updateStartupEmbedding(startup.id);

            // Build update data with proper typing
            const updateData: any = {};
            
            if (data.foundedYear !== undefined) updateData.foundedYear = data.foundedYear;
            if (data.industry !== undefined) updateData.industry = data.industry;
            if (data.technologies !== undefined) updateData.technologies = { set: data.technologies };
            if (data.pitchDeck !== undefined) updateData.pitchDeck = data.pitchDeck;
            if (data.demoVideo !== undefined) updateData.demoVideo = data.demoVideo;
            if (data.monthlyUsersAverage !== undefined) updateData.monthlyUsersAverage = data.monthlyUsersAverage;
            if (data.revenue !== undefined) updateData.revenue = data.revenue;
            if (data.teamSize !== undefined) updateData.teamSize = data.teamSize;
            if (data.visible !== undefined) updateData.visible = data.visible;
            if (data.github !== undefined) updateData.github = data.github;
            if (data.instagram !== undefined) updateData.instagram = data.instagram;
            if (data.linkedin !== undefined) updateData.linkedin = data.linkedin;
            if (data.facebook !== undefined) updateData.facebook = data.facebook;
            if (data.contactEmail !== undefined) updateData.contactEmail = data.contactEmail;

            return await prisma.startupInfo.update({
                where: { userId },
                data: updateData,
            });

        } catch(error) {
            console.error(error);
            throw error;
        }
    }


    async findByUserId(userId: number): Promise<StartupInfo | null> {
        try {
            return await prisma.startupInfo.findUnique({
                where: { userId: userId},
                include: {
                    user: {
                        select: {
                            email: true,
                            name: true,
                            logo: true,
                        }
                    },

                    members: true,
                }
            });

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async findById(postId: number): Promise<StartupInfo> {
        try {
            const startupProfile: StartupInfo | null = await prisma.startupInfo.findUnique({
                where: {id: postId},
                include: {
                    user: true,
                    members: true,
                }
            });

            if (startupProfile === null) {
                throw new AppError('start up profile does not exist', 404);
            }

            return startupProfile;

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

}

export const startupService = new StartupService();