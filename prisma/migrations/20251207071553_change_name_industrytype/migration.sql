/*
  Warnings:

  - The `industry` column on the `CompanyInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `industry` column on the `StartupInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "IndustryType" AS ENUM ('FINTECH', 'HEALTHTECH', 'EDTECH', 'ECOMMERCE', 'SAAS', 'MARKETPLACE', 'SOCIAL_MEDIA', 'GAMING', 'AI_ML', 'BLOCKCHAIN', 'CYBERSECURITY', 'PROPTECH', 'FOODTECH', 'TRAVELTECH', 'CLEANTECH', 'LOGISTICS', 'HR_TECH', 'MARKETING_TECH', 'LEGAL_TECH', 'INSURTECH', 'AGRITECH', 'BIOTECH', 'MOBILITY', 'ENTERTAINMENT', 'FASHION_TECH', 'SPORTS_TECH', 'REAL_ESTATE', 'CONSULTING', 'NONPROFIT', 'OTHER');

-- AlterTable
ALTER TABLE "CompanyInfo" DROP COLUMN "industry",
ADD COLUMN     "industry" "IndustryType";

-- AlterTable
ALTER TABLE "StartupInfo" DROP COLUMN "industry",
ADD COLUMN     "industry" "IndustryType";

-- DropEnum
DROP TYPE "Industry";
