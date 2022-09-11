/*
  Warnings:

  - You are about to drop the column `sub_total` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Order` table. All the data in the column will be lost.
  - The primary key for the `OrderItem` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `stock` on the `Sku` table. All the data in the column will be lost.
  - You are about to drop the column `stock_ongoing` on the `Supplier` table. All the data in the column will be lost.
  - You are about to drop the column `stock_ready` on the `Supplier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[code]` on the table `Promo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Promo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "StatusShipment" AS ENUM ('COMPLETED', 'PROCESS');

-- CreateEnum
CREATE TYPE "InvoiceStatus" AS ENUM ('PAID', 'UNPAID', 'CREDIT');

-- DropIndex
DROP INDEX "Customer_phone_key";

-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "last_order" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "sub_total",
DROP COLUMN "total";

-- AlterTable
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_pkey",
ADD COLUMN     "total" INTEGER NOT NULL,
ALTER COLUMN "sku_id" SET DATA TYPE TEXT,
ADD CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("product_id", "sku_id");

-- AlterTable
ALTER TABLE "Promo" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "desc" TEXT,
ADD COLUMN     "end" TIMESTAMP(3),
ADD COLUMN     "limit" INTEGER,
ADD COLUMN     "start" TIMESTAMP(3),
ADD COLUMN     "used" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Sku" DROP COLUMN "stock",
ADD COLUMN     "ongoing_stock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "ready_stock" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "stock_ongoing",
DROP COLUMN "stock_ready",
ADD COLUMN     "ongoing_shipment" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "ongoing_stock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "ready_stock" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "total_shipment" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "Invoice" (
    "id" SERIAL NOT NULL,
    "invoice_status" "InvoiceStatus" NOT NULL,
    "sub_total" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL DEFAULT 0,
    "total" INTEGER NOT NULL,
    "promo_id" INTEGER,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Restock" (
    "id" SERIAL NOT NULL,
    "shipment_status" "StatusShipment" NOT NULL,
    "resi" TEXT,
    "sub_total" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Restock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RestockItem" (
    "restock_id" INTEGER NOT NULL,
    "supplier_id" INTEGER NOT NULL,
    "sku_id" TEXT NOT NULL,
    "variation_id" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "RestockItem_pkey" PRIMARY KEY ("restock_id","sku_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Promo_code_key" ON "Promo"("code");

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_promo_id_fkey" FOREIGN KEY ("promo_id") REFERENCES "Promo"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestockItem" ADD CONSTRAINT "RestockItem_restock_id_fkey" FOREIGN KEY ("restock_id") REFERENCES "Restock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestockItem" ADD CONSTRAINT "RestockItem_supplier_id_fkey" FOREIGN KEY ("supplier_id") REFERENCES "Supplier"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
