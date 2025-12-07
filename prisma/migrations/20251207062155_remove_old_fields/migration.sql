/*
  Warnings:

  - You are about to drop the column `cancelAtPeriodEnd` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionEndDate` on the `CompanyInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CompanyInfo" DROP COLUMN "cancelAtPeriodEnd",
DROP COLUMN "subscriptionEndDate",
ADD COLUMN     "planCancelledAt" TIMESTAMP(3),
ADD COLUMN     "planExpiresAt" TIMESTAMP(3);
