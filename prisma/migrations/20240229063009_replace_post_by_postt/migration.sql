/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Postt" ADD COLUMN     "authorId" INTEGER,
ADD COLUMN     "completed" BOOLEAN DEFAULT false,
ADD COLUMN     "description" TEXT;

-- DropTable
DROP TABLE "Post";

-- AddForeignKey
ALTER TABLE "Postt" ADD CONSTRAINT "Postt_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
