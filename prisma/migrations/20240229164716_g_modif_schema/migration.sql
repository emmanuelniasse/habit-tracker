-- AlterTable
ALTER TABLE "Post" RENAME CONSTRAINT "Postt_pkey" TO "Post_pkey";

-- RenameForeignKey
ALTER TABLE "Post" RENAME CONSTRAINT "Postt_authorId_fkey" TO "Post_authorId_fkey";
