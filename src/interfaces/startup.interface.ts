import type { IndustryType, TechnologyType } from "@prisma/client";

export interface StartupInfoInput {
    industry: IndustryType;
    technologies?: TechnologyType[];
    
    foundedYear?: number;
    pitchDeck?: string;
    demoVideo?: string;
    
    monthlyUsersAverage?: number;
    revenue?: number;
    teamSize?: number;
    
    visible?: boolean;
    
    github?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
}

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
    
    github?: string;
    instagram?: string;
    linkedin?: string;
    facebook?: string;
}