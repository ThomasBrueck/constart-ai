/*
  Warnings:

  - You are about to drop the column `monthlySearchesAvailable` on the `CompanyInfo` table. All the data in the column will be lost.
  - Made the column `lastSearchReset` on table `CompanyInfo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CompanyInfo" DROP COLUMN "monthlySearchesAvailable",
ADD COLUMN     "searchesRemaining" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "searchesUsed" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "lastSearchReset" SET NOT NULL,
ALTER COLUMN "lastSearchReset" SET DEFAULT CURRENT_TIMESTAMP;
