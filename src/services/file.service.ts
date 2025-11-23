import { prisma } from '../config/prisma.client';
import { AppError } from '../utils/appError';
import cloudinary from '../config/cloudinary';
import { startupService } from './startup.service';
import { memberService } from './member.service';

class FileService {
    
    // method to upload image to cloud service
    private async uploadImage(fileBuffer: Buffer, folder: string, publicId?: string): Promise<string> {
        try {
            const base64Image = `data:image/png;base64,${fileBuffer.toString('base64')}`;
            
            const result = await cloudinary.uploader.upload(base64Image, {
                folder,
                public_id: publicId,
                overwrite: true,
                resource_type: 'image',
            });
            
            return result.secure_url;
        } catch (error) {
            console.error('Cloudinary upload error:', error);
            throw error;
        }
    }

    async uploadLogo(fileBuffer: Buffer, userId: number): Promise<string> {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            throw new AppError('user not found', 404);
        }

        return this.uploadImage(
            fileBuffer,
            'user-logos',
            `user_${userId}`
        );
    }

    async uploadProfileImage(fileBuffer: Buffer, userId: number, memberId: number): Promise<string> {
        try {
            const startup = await startupService.findByUserId(userId);

            if (!startup) throw new AppError('startup profile does not exist', 404);

            const member = await memberService.getMemberById(startup.id, memberId);

            if (!member) throw new AppError('member does not exist', 404);

            return this.uploadImage(
                fileBuffer,
                'member-profiles',
                `member_${memberId}`,
            );

        } catch(error) {
            throw error;
        }
    }
}

export const fileService = new FileService();