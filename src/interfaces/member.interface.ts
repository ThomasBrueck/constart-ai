import { PositionType } from "../../generated/prisma/enums";

export interface MemberInput {
    name: string;
    age: number;
    position: PositionType;
    
    university: string;
}