import type { StartupInfo } from "@prisma/client";
import type { StartupInfoInput } from "../interfaces/startup.interface";
import { prisma } from "../lib/db";
import { AppError, NotFoundError } from "../utils/appError";
import { StartupInfoInputUpdate } from '../interfaces/startup.interface';

class StartupService {

    async findAll(): Promise<StartupInfo[]> {
        try {

            return await prisma.startupInfo.findMany();

        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async createOrUpdateProfile(data: StartupInfoInput, userId: number): Promise<StartupInfo> {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId }
            });

            if (!user) throw new AppError('user not found', 404);
            if (user.role !== 'STARTUP') throw new AppError('only startups can create startup profile', 403);

            const existingProfile = await prisma.startupInfo.findUnique({
                where: { userId }
            });

            if (!data.foundedYear) throw new AppError('founded year is required', 400);
            if (!data.teamSize) throw new AppError('team size is required', 400);
            if (!data.demoVideo) throw new AppError('demo video is required', 400);

            if (!existingProfile) {
                return await prisma.startupInfo.create({
                    data: {
                        userId: userId,
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

            } else {
                const dataUpdate: StartupInfoInputUpdate = data;

                return await prisma.startupInfo.update({
                    where: { userId },
                    data: {
                        foundedYear: dataUpdate.foundedYear,
                        industry: dataUpdate.industry,
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

            }


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