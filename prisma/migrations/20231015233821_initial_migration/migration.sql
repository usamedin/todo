-- CreateEnum
CREATE TYPE "TodoStatus" AS ENUM ('TODO', 'IN_PROGRESS', 'DONE');

-- CreateTable
CREATE TABLE "ToDo" (
    "uuid" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "status" "TodoStatus" NOT NULL,

    CONSTRAINT "ToDo_pkey" PRIMARY KEY ("uuid")
);
