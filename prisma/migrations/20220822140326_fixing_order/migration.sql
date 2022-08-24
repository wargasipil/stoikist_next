/*
  Warnings:

  - You are about to drop the column `is_default` on the `Sku` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "rack_name" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Sku" DROP COLUMN "is_default",
ALTER COLUMN "last_restock" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Variation" ADD COLUMN     "is_default" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "ProductOption" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "options" TEXT[],

    CONSTRAINT "ProductOption_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductOption" ADD CONSTRAINT "ProductOption_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
