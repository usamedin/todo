/*
  Warnings:

  - The primary key for the `ExternalTodoIntegration` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `ExternalTodoIntegration` table. All the data in the column will be lost.
  - The primary key for the `ExternalTodoMapping` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `ExternalTodoMapping` table. All the data in the column will be lost.
  - The primary key for the `ExternalTodoMock` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `ExternalTodoMock` table. All the data in the column will be lost.
  - The primary key for the `ToDo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `uuid` on the `ToDo` table. All the data in the column will be lost.
  - The required column `id` was added to the `ExternalTodoIntegration` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `ExternalTodoMapping` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `ExternalTodoMock` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `id` was added to the `ToDo` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "ExternalTodoIntegration" DROP CONSTRAINT "ExternalTodoIntegration_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ExternalTodoIntegration_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ExternalTodoMapping" DROP CONSTRAINT "ExternalTodoMapping_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ExternalTodoMapping_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ExternalTodoMock" DROP CONSTRAINT "ExternalTodoMock_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ExternalTodoMock_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "ToDo" DROP CONSTRAINT "ToDo_pkey",
DROP COLUMN "uuid",
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "ToDo_pkey" PRIMARY KEY ("id");
