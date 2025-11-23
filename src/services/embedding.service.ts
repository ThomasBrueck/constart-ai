import { GoogleGenerativeAI } from "@google/generative-ai";
import { StartupInfo } from "../../generated/prisma/client";
import { memberService } from './member.service';

class EmbeddingService {
    private readonly genAI: GoogleGenerativeAI;

    constructor() {
        if (!process.env.GEMINI_API_KEY) {
            throw new Error('GEMINI_API_KEY must be defined in environment variable')
        }

        this.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    }

    async generateEmbedding(text: string): Promise<number[]> {
        try {
            const model = this.genAI.getGenerativeModel({ model: "text-embedding-001"});

            const result = await model.embedContent(text);
            const embedding = result.embedding.values;

            if (!embedding || embedding.length !== 768) {
                throw new Error(`expected 768 dimensions, got ${embedding?.length || 0}`);
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