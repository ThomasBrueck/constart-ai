import { Role } from "../../generated/prisma";


export interface UserInputRegister {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
    role: Role;
}

export interface UserInputLogin {
    email: string;
    password: string;
}

export interface UserInputUpdate {
    logo?: string;
    email?: string;
    name?: string;
    description?: string;
    website?: string;

}