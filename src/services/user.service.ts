import type { User } from "@prisma/client";
import type { UserInput } from "../interfaces/user.interface";
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

    async findByUsername(username: string): Promise<boolean> {
        const exist = await prisma.user.findUnique({
            where: { username }
        });

        return exist !== null;
    }

    async createUser(userData: UserInput): Promise<boolean> {
        try {
            const existEmail: boolean = await this.findByEmail(userData.email);
            const existUsername: boolean = await this.findByUsername(userData.username);

            if (existEmail) throw new AppError('email already exist', 409);
            if (existUsername) throw new AppError('username already exist', 409);

            if (userData.password !== userData.confirmPassword) throw new AppError('passwords are different', 400);

            const newPassword: string = await authService.hashPassword(userData.password);
            userData.password = newPassword;
            
            // JWT
            const user: User = await prisma.user.create({
                data: {
                    email: userData.email,
                    username: userData.username, 
                    password: userData.password,
                }               
            });

            return true;

        } catch (error) {
            throw error;
        }
    }

    async enter(userData: UserInput): Promise<string> {
        try {
            const email: string = userData.email;
            const userEmail = await prisma.user.findUnique({
                where: { email }
            });

            if (userEmail === null) throw new AppError('does not find user with that email', 404);

            const user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user) throw new AppError('the user does not exist', 404);

            const password: string = userData.password;

            const passwHash = await authService.comparePassword(password, user.password);

            if (!passwHash) throw new AppError('the password is incorrect', 400);

            const jwt = await authService.generateToken(user);

            return jwt;


        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async getProfile(userId: number): Promise<User> {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) throw new AppError('user does not exist', 404);

            return user;

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

}

export const userService = new UserService();