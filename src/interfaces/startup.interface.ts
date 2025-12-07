import type { IndustryType, TechnologyType } from "@prisma/client";



export interface StartupInfoInputUpdate {
    industry?: IndustryType;
    technologies?: TechnologyType[];
    
    foundedYear?: number;
    pitchDeck?: string;
    demoVideo?: string;
    
    monthlyUsersAverage?: number;
    revenue?: number;

    teamSize?: number;       
    visible?: boolean;

    contactEmail?: string;
    
    github?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
}