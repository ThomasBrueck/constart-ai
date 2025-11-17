import type { User } from "@prisma/client";
import type { JwtPayload } from "../interfaces/jwt.interface";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs";

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
            email: user.email
        });

        return jwt.sign(payload, this.JWT_SECRET, { expiresIn: '12h'});
    }

    async hashPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, 12);
    }

    async comparePassword(password: string, encrypted: string): Promise<boolean> {
        return await bcrypt.compare(password, encrypted);

    }
}

export const authService = new AuthService();