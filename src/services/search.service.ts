import { describe } from "node:test";
import { prisma } from "../config/prisma.client";
import { AppError } from "../utils/appError";
import { embeddingService } from "./embedding.service";

class SearchService {
    
    async updateStartupEmbedding(startupId: number) {
        try {
            const startup = await prisma.startupInfo.findUnique({
                where: { id: startupId },
                include: { user: true, members: true },
            });

            if (!startup) {
                throw new AppError('startup not found', 404);
            }

            const description = await embeddingService.generateStartupDescription(startup);

            const embedding = await embeddingService.generateEmbedding(description);

            await prisma.$executeRaw`
                UPDATE "StartupInfo"
                SET embedding = ${embedding}::vector
                WHERE id = ${startupId}
            `;

            return { success: true, startupId };

        } catch(error) {
            console.error(error);
            throw error;
        }
    }

    async searchStartups(query: string, limit: number = 10) {
        try {
            const queryEmbedding = await embeddingService.generateEmbedding(query);

            const results = await prisma.$queryRaw<any[]>`
                SELECT 
                s.id,
                s."userId",
                s.industry,
                s.technologies,
                s."foundedYear",
                s."monthlyUsersAverage",
                s.revenue,
                s."teamSize",
                s."contactEmail",
                u.name,
                u.description,
                u.logo,
                u.location,
                1 - (s.embedding <=> ${queryEmbedding}::vector) as similarity
                FROM "StartupInfo" s
                INNER JOIN "User" u ON s."userId" = u.id
                WHERE s.embedding IS NOT NULL
                AND s.visible = true
                ORDER BY s.embedding <=> ${queryEmbedding}::vector
                LIMIT ${limit}
            `;

            return results;

        } catch (error) {
            console.error("Error searching startups:", error);
            throw new Error("Failed to search startups");
        }
    }

    // For admin in the future if the app grow
    async updateAllStartupEmbeddings() {
        try {
            const startups = await prisma.startupInfo.findMany({
                where: { visible: true },
                select: { id: true },
            });

            let updated = 0;
            let failed = 0;

            for (const startup of startups) {
                try {
                    await this.updateStartupEmbedding(startup.id);
                    updated++;
                } catch (error) {
                    console.error(`Failed to update embedding for startup ${startup.id}:`, error);
                    failed++;
                }
            }

            return { updated, failed, total: startups.length };
        } catch (error) {
            console.error("Error updating all embeddings:", error);
            throw error;
        }
    }
}

export const searchService = new SearchService();