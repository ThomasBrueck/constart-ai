-- embedding vector --
CREATE EXTENSION IF NOT EXISTS vector;

-- AlterTable
ALTER TABLE "CompanyInfo" ADD COLUMN     "lastSearchReset" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "searchesRemaining" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "searchesUsed" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stripeCustomerId" TEXT,
ADD COLUMN     "stripeSubscriptionId" TEXT,
ALTER COLUMN "plan" SET DEFAULT 'FREE',
ALTER COLUMN "planStatus" SET DEFAULT 'INACTIVE';

-- AlterTable
ALTER TABLE "StartupInfo" ADD COLUMN     "embedding" vector(768);
