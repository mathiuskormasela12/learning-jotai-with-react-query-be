-- CreateTable
CREATE TABLE "Todos" (
    "id" TEXT NOT NULL,
    "todoName" VARCHAR(255) NOT NULL,
    "creaedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Todos_pkey" PRIMARY KEY ("id")
);
