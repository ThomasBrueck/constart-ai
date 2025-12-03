import { CompanyInfo, StartupInfo, User } from '@prisma/client';
import type { UserInputLogin, UserInputRegister, UserInputUpdate } from "../interfaces/user.interface";
import { authService } from "./auth.service";
import { AppError } from "../utils/appError";
import { prisma } from '../config/prisma.client';

class UserService {

    async findByEmail(email: string): Promise<boolean> {
        const exist = await prisma.user.findUnique({
            where: { email }
        });

        return exist !== null;
    }

    async findByName(name: string): Promise<boolean> {
        const exist = await prisma.user.findUnique({
            where: { name }
        });

        return exist !== null;
    }

    async findById(userId: number): Promise<User | null> {
        try {
            const user: User | null = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                throw new AppError('user not found', 404);
            }

            return user;

        } catch(error) {
            throw error;
        }
    }

    async isCompany(userId: number): Promise<boolean> {
        try {

            const user: User | null = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                throw new AppError('user not found', 404);
            }

            return user.role === 'COMPANY';

        } catch(error) {
            throw error;
        }
    }

    async getMyBasicInformation(userId: number): Promise<User | null> {
        try {
            const basicInfo: User | null = await prisma.user.findUnique({
                where: {id: userId}
            });

            return basicInfo;

        } catch(error) {
            throw error;
        }
    }

    async updateMyBasicInfo(data: UserInputUpdate, userId: number): Promise<Omit<User, 'password' | 'logo' | 'createdAt' | 'updateAt' | 'role'>> {
        try {

            if (data.name) {
                const existingName: User | null = await prisma.user.findFirst({
                    where: {
                        name: data.name,
                        id: { not: userId },
                    }
                });

                if (existingName) throw new AppError('name already taken', 409);
            }

            if (data.email) {
                const existingEmail: User | null = await prisma.user.findFirst({
                    where: {
                        email: data.email,
                        id: { not: userId },
                    }
                });

                if (existingEmail) throw new AppError('email already taken', 409);
            }

            const updateUser = await prisma.user.update({
                where: { id: userId },
                data: {
                    email: data.email,
                    name: data.name,
                    description: data.description,
                    webiste: data.website,
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    description: true,
                    webiste: true,                    
                }
            });

            return updateUser;

        } catch(error) {
            throw error;
        }
    }

    async changePassword(password: string, confirmPassword: string, userId: number): Promise<boolean> {
        try {
            
            if (password !== confirmPassword) {
                throw new AppError('the passwords are incorrect', 400);
            }

            const passHash: string = await authService.hashPassword(password);

            await prisma.user.update({
                where: { id: userId },
                data: {
                    password: passHash,
                }
            });

            return true;

        } catch(error) {
            throw error;
        }
    }

    async deleteAccount(userId: number): Promise<boolean> {
        try {
            
            await prisma.user.delete({
                where: { id: userId },
            });
            
            return true;

        } catch(error) {
            throw error;
        }
    }

    // return user without createdAt, updatedAt & password
    async uploadLogo(userId: number, logoUrl: string) {
        try {
            const user: User | null = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) {
                throw new AppError('user does not exit', 404);
            }

            const userUpdated = await prisma.user.update({
                where: { id: userId },
                data: { logo: logoUrl },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    logo: true,
                    description: true,
                    webiste: true,
                }
            });

            return userUpdated;

        } catch(error) {
            throw error;
        }
    }
}

export const userService = new UserService();