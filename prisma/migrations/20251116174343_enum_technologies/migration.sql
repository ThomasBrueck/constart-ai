/*
  Warnings:

  - The `technologies` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Technology" AS ENUM ('REACT', 'NODE', 'TYPESCRIPT', 'PYTHON', 'DJANGO', 'REACT_NATIVE', 'FLUTTER', 'KOTLIN', 'SWIFT', 'GO', 'JAVASCRIPT', 'CPP', 'CSHARE');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "technologies",
ADD COLUMN     "technologies" "Technology"[];
