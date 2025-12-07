import { PositionType } from "@prisma/client";

export interface MemberInput {
    name: string;
    age: number;
    position: PositionType;
    
    university: string;
}