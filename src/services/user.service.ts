import { User } from '@prisma/client';
import type { UserInputLogin, UserInputRegister } from "../interfaces/user.interface";
import { prisma } from "../lib/db";
import { authService } from "./auth.service";
import { AppError } from "../utils/appError";

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

}

export const userService = new UserService();