-- CreateEnum
CREATE TYPE "EnumClientClientStatus" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumServiceCategory" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumLeadLeadStatus" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumLeadLeadType" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumProjectStatus" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumInvoiceInvoiceType" AS ENUM ('Option1');

-- CreateEnum
CREATE TYPE "EnumInvoicePaymentStatus" AS ENUM ('Option1');

-- CreateTable
CREATE TABLE "Client" (
    "billingInfo" JSONB,
    "clientStatus" "EnumClientClientStatus",
    "company" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "fullName" TEXT,
    "id" TEXT NOT NULL,
    "paymentMethods" JSONB,
    "phone" TEXT,
    "portalCredentials" JSONB,
    "serviceId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "basePrice" DOUBLE PRECISION,
    "category" "EnumServiceCategory",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryTimeline" TEXT,
    "description" TEXT,
    "duration" INTEGER,
    "id" TEXT NOT NULL,
    "serviceName" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lead" (
    "assignedResponsible" TEXT,
    "clientId" TEXT,
    "company" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "email" TEXT,
    "estimatedProjectValue" DOUBLE PRECISION,
    "id" TEXT NOT NULL,
    "leadStatus" "EnumLeadLeadStatus",
    "leadType" "EnumLeadLeadType",
    "name" TEXT,
    "notes" TEXT,
    "phone" TEXT,
    "serviceOfInterest" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "clientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "monthlyAmountDue" DOUBLE PRECISION,
    "name" TEXT,
    "paymentSchedule" JSONB,
    "progress" TEXT,
    "serviceId" TEXT,
    "startDate" TIMESTAMP(3),
    "status" "EnumProjectStatus",
    "totalPrice" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AiUsageMetric" (
    "clientId" TEXT,
    "cost" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "messageCount" INTEGER,
    "serviceId" TEXT,
    "serviceType" TEXT,
    "tokenConsumption" INTEGER,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usageDate" TIMESTAMP(3),

    CONSTRAINT "AiUsageMetric_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Password" (
    "accessPermissions" JSONB,
    "clientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "credentials" TEXT,
    "expirationDate" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usageAudit" JSONB,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "amount" DOUBLE PRECISION,
    "attachments" JSONB,
    "clientId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dueDate" TIMESTAMP(3),
    "generatedAt" TIMESTAMP(3),
    "id" TEXT NOT NULL,
    "invoiceType" "EnumInvoiceInvoiceType",
    "paymentHistory" JSONB,
    "paymentStatus" "EnumInvoicePaymentStatus",
    "paymentTerms" TEXT,
    "projectId" TEXT,
    "serviceId" TEXT,
    "tax" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lead" ADD CONSTRAINT "Lead_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiUsageMetric" ADD CONSTRAINT "AiUsageMetric_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AiUsageMetric" ADD CONSTRAINT "AiUsageMetric_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Password" ADD CONSTRAINT "Password_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;
