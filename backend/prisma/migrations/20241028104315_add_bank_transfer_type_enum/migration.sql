/*
  Warnings:

  - Changed the type of `type` on the `AccountingRecord` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "BankTransferType" AS ENUM ('sending', 'receiving');

-- AlterTable
ALTER TABLE "AccountingRecord" DROP COLUMN "type",
ADD COLUMN     "type" "BankTransferType" NOT NULL;
