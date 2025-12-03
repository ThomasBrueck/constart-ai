import { VoyageAIClient } from "voyageai";
import { AppError } from "../utils/appError";
import { EmbedResponseDataItem } from "voyageai/api";


class EmbeddingService {
    private readonly voyageAI: VoyageAIClient;

    constructor() {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('VOYAGE_API_KEY must be defined in environment variable')
        }

        this.voyageAI = new VoyageAIClient({apiKey: process.env.GEMINI_API_KEY});
    }

    async generateEmbedding(text: string): Promise<number[]> {
        try {

            const response = await this.voyageAI.embed({
                input: text,
                model: 'voyage-code-2',
            });

            if (!response || !Array.isArray(response.data) || response.data[0]?.embedding) {
                throw new AppError('error with response object throw it by voyage AI', 500);
            }

            const embedding: number[] | undefined = response.data[0]?.embedding;

            if (!embedding || embedding.values.length !== 1536) {
                throw new Error(`expected 1536 dimensions, got ${embedding?.values.length || 0}`);
            }

            return embedding;

        } catch (error) {
            console.error('error generating embedding: ', error);
            throw new Error('failed to generate embedding');
        }
    }

    async generateStartupDescription(startup: any): Promise<string> {
        const parts: string [] = [];

        if (startup.user?.name) parts.push(`company: ${startup.user.name}`);
        if (startup.user?.description) parts.push(`description: ${startup.user.description}`);

        if (startup.industry) parts.push(`industry: ${startup.industry}`);

        if (startup.technologies && startup.technologies.length > 0) parts.push(`technologies: ${startup.technologies.join(', ')}`);

        if (startup.foundedYear) parts.push(`founded: ${startup.foundedYear}`);

        if (startup.monthlyUsersAverage) parts.push(`monthly users: ${startup.monthlyUsersAverage}`);

        if (startup.revenue) parts.push(`revenue: ${startup.revenue}`);

        if (startup.teamSize) parts.push(`team size: ${startup.teamSize}`);

        if (startup.members && startup.members.length > 0) {
            const positions = startup.members
                .map((m: any) => m.position)
                .filter(Boolean)
                .join(', ');

            if (positions) parts.push(`team roles: ${positions}`);

            const universities = startup.members
                .map((m: any) => m.university)
                .filter(Boolean)
                .join(', ');

            if (universities) parts.push(`universities: ${universities}`);

            const ages = startup.members
                .map((m: any) => m.age)
                .filter(Boolean)
                .join(', ');

            if (ages) parts.push(`ages: ${ages}`);
        }

        return parts.join('. ');
    }
}

export const embeddingService = new EmbeddingService();