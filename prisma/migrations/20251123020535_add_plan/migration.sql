/*
  Warnings:

  - Added the required column `plan` to the `CompanyInfo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planStatus` to the `CompanyInfo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('PRO', 'BASIC', 'FREE');

-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "CompanyInfo" ADD COLUMN     "plan" "Plan" NOT NULL,
ADD COLUMN     "planStatus" "PlanStatus" NOT NULL,
ALTER COLUMN "industry" DROP NOT NULL,
ALTER COLUMN "size" DROP NOT NULL,
ALTER COLUMN "companyType" DROP NOT NULL;
