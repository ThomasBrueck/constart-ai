/*
  Warnings:

  - The values [NEXT,NUXT,GATSBY,ASTRO,REMIX,SOLID,PREACT,QWIK,REACT_NATIVE,CORDOVA,CAPACITOR,NODE,EXPRESS,NEST,FASTIFY,KOA,DJANGO,FLASK,FASTAPI,SPRING_BOOT,LARAVEL,SYMFONY,RAILS,PHOENIX,ACTIX,ROCKET,JAVASCRIPT,TYPESCRIPT,CPP,ELIXIR,SCALA,KOTLIN_JVM,DART,R,JULIA,SUPABASE,PLANETSCALE,COCKROACHDB,ELASTICSEARCH,NEO4J,INFLUXDB,TIMESCALEDB,VERCEL,NETLIFY,RAILWAY,RENDER,FLY_IO,DIGITAL_OCEAN,HEROKU,CLOUDFLARE,GITLAB_CI,CIRCLECI,TRAVIS_CI,HUGGING_FACE,LANGCHAIN,OPENAI,ANTHROPIC,STABLE_DIFFUSION,ETHEREUM,SOLIDITY,WEB3_JS,ETHERS,HARDHAT,TRUFFLE,POLYGON,SOLANA,JEST,VITEST,CYPRESS,PLAYWRIGHT,SELENIUM,PYTEST,JUNIT,TAILWIND,MATERIAL_UI,CHAKRA_UI,SHADCN,STYLED_COMPONENTS,EMOTION,SASS,REDUX,ZUSTAND,MOBX,RECOIL,JOTAI,PINIA,VITE,WEBPACK,TURBOPACK,ESBUILD,ROLLUP,PARCEL,GRAPHQL,REST_API,GRPC,WEBSOCKETS,SOCKET_IO,STRIPE,TWILIO,SENDGRID,PRISMA,DRIZZLE,TYPEORM] on the enum `TechnologyType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `companyType` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `industry` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `searchesRemaining` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `searchesUsed` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `website` on the `CompanyInfo` table. All the data in the column will be lost.
  - The `industry` column on the `StartupInfo` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `User` table. All the data in the column will be lost.
  - Changed the type of `position` on the `Member` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Made the column `university` on table `Member` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `role` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STARTUP', 'COMPANY');

-- CreateEnum
CREATE TYPE "Industry" AS ENUM ('TRAVEL', 'HEALTH', 'FINANCE', 'ECOMMERCE', 'EDUCATION', 'ENTERTAINMENT', 'SOCIAL', 'PRODUCTIVITY', 'OTHER');

-- AlterEnum
ALTER TYPE "PlanStatus" ADD VALUE 'CANCELLED';

-- AlterEnum
BEGIN;
CREATE TYPE "TechnologyType_new" AS ENUM ('REACT', 'VUE', 'ANGULAR', 'SVELTE', 'NEXTJS', 'NUXTJS', 'NODEJS', 'PYTHON', 'JAVA', 'CSHARP', 'PHP', 'RUBY', 'GO', 'RUST', 'SWIFT', 'KOTLIN', 'FLUTTER', 'REACTNATIVE', 'IONIC', 'XAMARIN', 'UNITY', 'UNREAL', 'TENSORFLOW', 'PYTORCH', 'SCIKIT_LEARN', 'KERAS', 'OPENCV', 'MONGODB', 'POSTGRESQL', 'MYSQL', 'SQLITE', 'REDIS', 'CASSANDRA', 'DYNAMODB', 'FIREBASE', 'AWS', 'AZURE', 'GCP', 'DOCKER', 'KUBERNETES', 'JENKINS', 'GITLAB', 'GITHUB_ACTIONS', 'TERRAFORM', 'ANSIBLE');
ALTER TABLE "StartupInfo" ALTER COLUMN "technologies" TYPE "TechnologyType_new"[] USING ("technologies"::text::"TechnologyType_new"[]);
ALTER TYPE "TechnologyType" RENAME TO "TechnologyType_old";
ALTER TYPE "TechnologyType_new" RENAME TO "TechnologyType";
DROP TYPE "public"."TechnologyType_old";
COMMIT;

-- DropIndex
DROP INDEX "User_name_key";

-- AlterTable
ALTER TABLE "CompanyInfo" DROP COLUMN "companyType",
DROP COLUMN "industry",
DROP COLUMN "searchesRemaining",
DROP COLUMN "searchesUsed",
DROP COLUMN "size",
DROP COLUMN "website",
ADD COLUMN     "monthlySearchesAvailable" INTEGER NOT NULL DEFAULT 3,
ADD COLUMN     "planCancelledAt" TIMESTAMP(3),
ADD COLUMN     "planExpiresAt" TIMESTAMP(3),
ALTER COLUMN "lastSearchReset" DROP NOT NULL,
ALTER COLUMN "lastSearchReset" DROP DEFAULT;

-- AlterTable
ALTER TABLE "Member" DROP COLUMN "position",
ADD COLUMN     "position" TEXT NOT NULL,
ALTER COLUMN "university" SET NOT NULL;

-- AlterTable
ALTER TABLE "StartupInfo" DROP COLUMN "industry",
ADD COLUMN     "industry" "Industry",
ALTER COLUMN "technologies" SET DEFAULT ARRAY[]::"TechnologyType"[],
ALTER COLUMN "revenue" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updateAt",
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL,
ALTER COLUMN "name" DROP NOT NULL;

-- DropEnum
DROP TYPE "CompanyType";

-- DropEnum
DROP TYPE "IndustryType";

-- DropEnum
DROP TYPE "PositionType";

-- DropEnum
DROP TYPE "UserRole";

-- CreateTable
CREATE TABLE "StripeWebhookEvent" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "StripeWebhookEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "StripeWebhookEvent_type_idx" ON "StripeWebhookEvent"("type");
