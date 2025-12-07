-- CreateEnum
CREATE TYPE "CompanyType" AS ENUM ('VENTURE_CAPITAL', 'ANGEL_INVESTOR', 'ACCELERATOR', 'CORPORATION', 'STARTUP', 'GOVERNMENT', 'OTHER');

-- AlterTable
ALTER TABLE "CompanyInfo" ADD COLUMN     "companyType" "CompanyType",
ADD COLUMN     "industry" "Industry",
ADD COLUMN     "size" INTEGER,
ADD COLUMN     "website" TEXT;
