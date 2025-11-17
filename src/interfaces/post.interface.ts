import type { Technology } from "@prisma/client";

export interface PostInput {
    title: string;
    description: string;
    technologies: Technology [];
    isRemote: boolean;
    slots: number;
    filled: number;
}

export interface PostInputUpdate {
    title?: string;
    description?: string;
    technologies?: Technology [];
    isRemote?: boolean;
    slots?: number;
}