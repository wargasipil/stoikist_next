/*
  Warnings:

  - Added the required column `order_from` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payment_method` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderFrom" AS ENUM ('OFFLINE', 'ONLINE');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CREDIT');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "order_from" "OrderFrom" NOT NULL,
ADD COLUMN     "payment_method" "PaymentMethod" NOT NULL;
