-- CreateEnum
CREATE TYPE "Status" AS ENUM ('OPENED', 'ON_THE_WAY', 'RESCUED', 'CLOSE');

-- CreateTable
CREATE TABLE "report" (
    "Id" SERIAL NOT NULL,
    "Animal" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "Phone" TEXT NOT NULL,
    "Picture" TEXT NOT NULL,
    "Road" TEXT NOT NULL,
    "Status" "Status" NOT NULL DEFAULT 'OPENED',
    "Suburb" TEXT NOT NULL,

    CONSTRAINT "report_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "report_Email_key" ON "report"("Email");
