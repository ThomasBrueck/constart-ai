import { IndustryType, CompanyType } from "../../generated/prisma";

export interface CompanyInputUpdate {
    industry: IndustryType;
    size: number;
    companyType: CompanyType;
    website: string;
}