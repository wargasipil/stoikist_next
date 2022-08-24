/*
  Warnings:

  - Added the required column `type_id` to the `Supplier` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "type_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_type_id_fkey" FOREIGN KEY ("type_id") REFERENCES "SupplierType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
