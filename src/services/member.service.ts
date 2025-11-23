import { StartupInfo } from "@prisma/client";
import { MemberInput } from "../interfaces/member.interface";
import { prisma } from "../config/prisma.client";
import { Member } from "../../generated/prisma/client";
import { AppError } from "../utils/appError";
import { userService } from "./user.service";
import { PositionType } from '../../generated/prisma/enums';

class MemberService {

    async addMemberToStartup(data: MemberInput, userId: number): Promise<Member> {
        try {
            const member = await prisma.member.create({
                data: {
                    startupInfoId: userId,
                    name: data.name,
                    age: data.age,
                    position: data.position,
                    university: data.university,
                }
            });

            return member;

        } catch(error) {
            throw error;
        }
    }

    async getMemberById(startupId: number, memberId: number): Promise<Member> {
        try {
            const startup = await prisma.startupInfo.findUnique({
                where: { id : startupId },
            });

            if (!startup) throw new AppError('the user does not have startup profile', 404);

            const member: Member | null = await prisma.member.findUnique({
                where: { id: memberId },
            });

            if (!member) throw new AppError('member not found', 404);

            if (member?.startupInfoId !== startup.id) {
                throw new AppError('the member does not belong to the startup', 403);
            }

            return member;

        } catch(error) {
            throw error;
        }
    }

    async getAllMembersByStartupId(startupId: number): Promise<Member[]> {
        try {
            const startup = await prisma.startupInfo.findUnique({
                where: { id : startupId },
            });

            if (!startup) throw new AppError('the startup does not exist', 404);

            const members: Member [] = await prisma.member.findMany({
                where: { startupInfoId: startup.id },
            });

            return members;

        } catch(error) {
            throw error;
        }
    }

    async deleteMemberById(userId: number, memberId: number): Promise<Member> {
        try {
            const startup = await prisma.startupInfo.findUnique({
                where: { userId : userId },
            });

            if (!startup) throw new AppError('the startup profile does not exist', 404);

            const member: Member | null = await prisma.member.delete({
                where: { startupInfoId: startup.id, id: memberId },
            });

            if (!member) throw new AppError('the member does not exist', 404);

            return member;

        } catch(error) {
            throw error;
        }
    }

    async updloadProfileImage(userId: number, memberId: number, profileUrl: string): Promise<Member> {
        try {
            const user = await prisma.user.findUnique({
                where: { id: userId },
            });

            if (!user) throw new AppError('user not found', 404);

            const startup = await prisma.startupInfo.findUnique({
                where: { userId: userId },
            });

            if (!startup) throw new AppError('startup not found', 404);

            const member = await memberService.getMemberById(startup.id, memberId);

            const memberUpdated: Member = await prisma.member.update({
                where: { id: member.id },
                data: {
                    profileImage: profileUrl,
                },
                select: {
                    id: true,
                    startupInfoId: true,
                    name: true,
                    age: true,
                    position: true,
                    profileImage: true,
                    university: true,
                }
            });

            return memberUpdated;
            
        } catch(error) {
            throw error;
        }
    }


}

export const memberService = new MemberService();