-- AlterTable
ALTER TABLE "Habit" RENAME CONSTRAINT "Post_pkey" TO "Habit_pkey";

-- RenameForeignKey
ALTER TABLE "Habit" RENAME CONSTRAINT "Post_authorId_fkey" TO "Habit_authorId_fkey";
