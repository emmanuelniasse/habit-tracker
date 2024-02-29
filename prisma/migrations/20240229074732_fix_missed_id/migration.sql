/*
  Warnings:

  - Made the column `authorId` on table `Postt` required. This step will fail if there are existing NULL values in that column.

*/
UPDATE "Postt" SET "authorId" = 2 WHERE "authorId" IS NULL;


-- DropForeignKey
ALTER TABLE "Postt" DROP CONSTRAINT "Postt_authorId_fkey";

-- AlterTable
ALTER TABLE "Postt" ALTER COLUMN "authorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Postt" ADD CONSTRAINT "Postt_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

