import { CompanyType, IndustryType } from "../../generated/prisma/enums";

export interface CompanyInputUpdate {
    industry: IndustryType;
    size: number;
    companyType: CompanyType;
    website: string;
}