import { AppError, NotFoundError } from "../utils/appError";
import { StartupInfoInputUpdate } from '../interfaces/startup.interface';
import { prisma } from "../config/prisma.client";
import { StartupInfo } from "../../generated/prisma/client";
import { start } from "repl";
import { searchService } from "./search.service";

class StartupService {

    async findAll(): Promise<StartupInfo[]> {
        try {

            return await prisma.startupInfo.findMany({
                include: {
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
                if (!startup.user.webiste) {
                    throw new AppError('You need to add your startup website', 400);
                }
            }

            // update embedding for future searches of companies
            await searchService.updateStartupEmbedding(startup.id);

            return await prisma.startupInfo.update({
                where: { userId },
                data: {
                    foundedYear: data.foundedYear,
                    industry: data.industry,
                    technologies: data.technologies,
                    pitchDeck: data.pitchDeck,
                    demoVideo: data.demoVideo,
                    monthlyUsersAverage: data.monthlyUsersAverage,
                    revenue: data.revenue,
                    teamSize: data.teamSize,
                    visible: data.visible,
                    github: data.github,
                    instagram: data.instagram,
                    linkedin: data.linkedin,
                    facebook: data.facebook,
                },
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