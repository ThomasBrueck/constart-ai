import { NextFunction, Request, Response } from "express";
import { MemberInput } from "../interfaces/member.interface";
import { Member } from "../../generated/prisma/client";
import { memberService } from "../services/member.service";
import { StartupInfo } from "@prisma/client";
import { startupService } from "../services/startup.service";

class MemberController {

    async createMember(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            const startup = await startupService.findByUserId(userId);

            if (startup === null) {
                return res.status(404).json({
                    message: 'startup not found',
                });
            }

            const data: MemberInput = req.body;
            
            const member: Member = await memberService.addMemberToStartup(data, startup.id);

            return res.status(200).json({
                data: member,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async findMemberById(req: Request, res: Response, next: NextFunction) {
        try {
            const startupId: string | undefined = req.params.id;

            if (!startupId) return res.status(404).json({ message: 'the startup id is required'});

            const startupIdNmb: number = parseInt(startupId);

            const memberId: string | undefined = req.params.memberId;

            if (!memberId) return res.status(404).json({ message: 'the member id is required'});

            const memberIdNmb: number = parseInt(memberId);

            const member: Member = await memberService.getMemberById(startupIdNmb, memberIdNmb);

            return res.status(200).json({
                data: member,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }


    async findAllMembersByStartupId(req: Request, res: Response, next: NextFunction) {
        try {
            const startupId: string | undefined = req.params.id;

            if (!startupId) return res.status(400).json({ message: 'startup id is required'});

            const startupIdNmb: number = parseInt(startupId);

            const members = await memberService.getAllMembersByStartupId(startupIdNmb);

            return res.status(200).json({
                data: members,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }

    async deletememberById(req: Request, res: Response, next: NextFunction) {
        try {
            const userId: number = req.user?.userId;

            if (!userId) return res.status(400).json({ message: 'the user id is required'});

            const memberId: string | undefined = req.params.memberId;

            if (!memberId) return res.status(400).json({ message: 'the member id is required'});

            const memberIdNmb: number = parseInt(memberId);

            const memberDeleted: Member = await memberService.deleteMemberById(userId, memberIdNmb);

            return res.status(200).json({
                data: memberDeleted,
            });

        } catch(error) {
            console.error(error);
            next(error);
        }
    }
}

export const memberController = new MemberController();