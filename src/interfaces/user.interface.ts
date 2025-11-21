import { UserRole } from "@prisma/client";

export interface UserInputRegister {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    role: UserRole;
}

export interface UserInputLogin {
    email: string;
    password: string;
}