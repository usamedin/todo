-- CreateTable
CREATE TABLE "ExternalTodoIntegration" (
    "uuid" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ExternalTodoIntegration_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ExternalTodoMapping" (
    "uuid" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,

    CONSTRAINT "ExternalTodoMapping_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ExternalTodoMock" (
    "uuid" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "status" "TodoStatus" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ExternalTodoMock_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "ExternalIntegrationMock" (
    "userId" TEXT NOT NULL,
    "webhookUrl" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "ExternalIntegrationMock_pkey" PRIMARY KEY ("userId")
);
