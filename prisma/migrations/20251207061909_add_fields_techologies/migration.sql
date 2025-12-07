/*
  Warnings:

  - The values [TRAVEL,HEALTH,FINANCE,EDUCATION,SOCIAL,PRODUCTIVITY] on the enum `Industry` will be removed. If these variants are still used in the database, this will fail.
  - The values [NEXTJS,NUXTJS,NODEJS,REACTNATIVE,UNITY,UNREAL,OPENCV,SQLITE,GITLAB] on the enum `TechnologyType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `planCancelledAt` on the `CompanyInfo` table. All the data in the column will be lost.
  - You are about to drop the column `planExpiresAt` on the `CompanyInfo` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Industry_new" AS ENUM ('FINTECH', 'HEALTHTECH', 'EDTECH', 'ECOMMERCE', 'SAAS', 'MARKETPLACE', 'SOCIAL_MEDIA', 'GAMING', 'AI_ML', 'BLOCKCHAIN', 'CYBERSECURITY', 'PROPTECH', 'FOODTECH', 'TRAVELTECH', 'CLEANTECH', 'LOGISTICS', 'HR_TECH', 'MARKETING_TECH', 'LEGAL_TECH', 'INSURTECH', 'AGRITECH', 'BIOTECH', 'MOBILITY', 'ENTERTAINMENT', 'FASHION_TECH', 'SPORTS_TECH', 'REAL_ESTATE', 'CONSULTING', 'NONPROFIT', 'OTHER');
ALTER TABLE "StartupInfo" ALTER COLUMN "industry" TYPE "Industry_new" USING ("industry"::text::"Industry_new");
ALTER TYPE "Industry" RENAME TO "Industry_old";
ALTER TYPE "Industry_new" RENAME TO "Industry";
DROP TYPE "public"."Industry_old";
COMMIT;

-- AlterEnum
BEGIN;
CREATE TYPE "TechnologyType_new" AS ENUM ('REACT', 'VUE', 'ANGULAR', 'SVELTE', 'NEXT', 'NUXT', 'GATSBY', 'ASTRO', 'REMIX', 'SOLID', 'PREACT', 'QWIK', 'REACT_NATIVE', 'FLUTTER', 'KOTLIN', 'SWIFT', 'IONIC', 'XAMARIN', 'CORDOVA', 'CAPACITOR', 'NODE', 'EXPRESS', 'NEST', 'FASTIFY', 'KOA', 'DJANGO', 'FLASK', 'FASTAPI', 'SPRING_BOOT', 'LARAVEL', 'SYMFONY', 'RAILS', 'PHOENIX', 'ACTIX', 'ROCKET', 'JAVASCRIPT', 'TYPESCRIPT', 'PYTHON', 'JAVA', 'GO', 'RUST', 'CPP', 'CSHARP', 'PHP', 'RUBY', 'ELIXIR', 'SCALA', 'KOTLIN_JVM', 'DART', 'R', 'JULIA', 'POSTGRESQL', 'MYSQL', 'MONGODB', 'REDIS', 'CASSANDRA', 'DYNAMODB', 'FIREBASE', 'SUPABASE', 'PLANETSCALE', 'COCKROACHDB', 'ELASTICSEARCH', 'NEO4J', 'INFLUXDB', 'TIMESCALEDB', 'AWS', 'AZURE', 'GCP', 'VERCEL', 'NETLIFY', 'RAILWAY', 'RENDER', 'FLY_IO', 'DIGITAL_OCEAN', 'HEROKU', 'CLOUDFLARE', 'DOCKER', 'KUBERNETES', 'TERRAFORM', 'ANSIBLE', 'JENKINS', 'GITHUB_ACTIONS', 'GITLAB_CI', 'CIRCLECI', 'TRAVIS_CI', 'TENSORFLOW', 'PYTORCH', 'SCIKIT_LEARN', 'KERAS', 'HUGGING_FACE', 'LANGCHAIN', 'OPENAI', 'ANTHROPIC', 'STABLE_DIFFUSION', 'ETHEREUM', 'SOLIDITY', 'WEB3_JS', 'ETHERS', 'HARDHAT', 'TRUFFLE', 'POLYGON', 'SOLANA', 'JEST', 'VITEST', 'CYPRESS', 'PLAYWRIGHT', 'SELENIUM', 'PYTEST', 'JUNIT', 'TAILWIND', 'MATERIAL_UI', 'CHAKRA_UI', 'SHADCN', 'STYLED_COMPONENTS', 'EMOTION', 'SASS', 'REDUX', 'ZUSTAND', 'MOBX', 'RECOIL', 'JOTAI', 'PINIA', 'VITE', 'WEBPACK', 'TURBOPACK', 'ESBUILD', 'ROLLUP', 'PARCEL', 'GRAPHQL', 'REST_API', 'GRPC', 'WEBSOCKETS', 'SOCKET_IO', 'STRIPE', 'TWILIO', 'SENDGRID', 'PRISMA', 'DRIZZLE', 'TYPEORM');
ALTER TABLE "public"."StartupInfo" ALTER COLUMN "technologies" DROP DEFAULT;
ALTER TABLE "StartupInfo" ALTER COLUMN "technologies" TYPE "TechnologyType_new"[] USING ("technologies"::text::"TechnologyType_new"[]);
ALTER TYPE "TechnologyType" RENAME TO "TechnologyType_old";
ALTER TYPE "TechnologyType_new" RENAME TO "TechnologyType";
DROP TYPE "public"."TechnologyType_old";
ALTER TABLE "StartupInfo" ALTER COLUMN "technologies" SET DEFAULT ARRAY[]::"TechnologyType"[];
COMMIT;

-- AlterTable
ALTER TABLE "CompanyInfo" DROP COLUMN "planCancelledAt",
DROP COLUMN "planExpiresAt",
ADD COLUMN     "cancelAtPeriodEnd" BOOLEAN DEFAULT false,
ADD COLUMN     "subscriptionEndDate" TIMESTAMP(3);
