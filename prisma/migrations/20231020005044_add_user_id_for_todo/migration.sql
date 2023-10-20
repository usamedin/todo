/*
  Warnings:

  - Added the required column `userId` to the `ToDo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ToDo" ADD COLUMN     "userId" TEXT NOT NULL;
