/*
  Warnings:

  - You are about to drop the column `source` on the `Supplier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `SupplierType` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `note` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "source",
ADD COLUMN     "note" TEXT NOT NULL,
ALTER COLUMN "created" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "SupplierType_name_key" ON "SupplierType"("name");
