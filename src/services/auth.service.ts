import type { JwtPayload } from "../interfaces/jwt.interface";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";
import { UserInputLogin, UserInputRegister } from "../interfaces/user.interface";
import { AppError } from "../utils/appError";
import { userService } from "./user.service";
import { prisma } from "../config/prisma.client";
import { User } from "../../generated/prisma/client";

class AuthService {
    private readonly JWT_SECRET: string;

    constructor() {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET must be defined in environment variables');
        }
        this.JWT_SECRET = process.env.JWT_SECRET;
    }

    public generateToken(user: User): string {
        const payload: JwtPayload = ({
            userId: user.id,
            email: user.email,
            role: user.role,
        });

        return jwt.sign(payload, this.JWT_SECRET, { expiresIn: '12h'});
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12);
    }

    async comparePassword(password: string, encrypted: string): Promise<boolean> {
        return await bcrypt.compare(password, encrypted);

    }

    async createUser(userData: UserInputRegister): Promise<User> {
        try {
            const existEmail: boolean = await userService.findByEmail(userData.email);
            const existName: boolean = await userService.findByName(userData.name);

            if (existEmail) throw new AppError('email already exist', 409);
            if (existName) throw new AppError('name already exist', 409);

            if (userData.password !== userData.confirmPassword) throw new AppError('passwords are different', 400);

            if (userData.role === null) throw new AppError('you need to specify the role', 400)

            const newPassword: string = await authService.hashPassword(userData.password);
            userData.password = newPassword;
            
            // JWT
            const user: User = await prisma.user.create({
                data: {
                    email: userData.email,
                    name: userData.name, 
                    password: userData.password,
                    role: userData.role,
                }               
            });

            return user;

        } catch (error) {
            throw error;
        }
    }

    async loginUser(userData: UserInputLogin): Promise<string> {
        try {
            const email: string = userData.email;
            const user = await prisma.user.findUnique({
                where: { email }
            });

            if (user?.email === null) throw new AppError('does not find user with that email', 404);

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
}

export const authService = new AuthService();