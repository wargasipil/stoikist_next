-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "stock_ongoing" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "stock_ready" INTEGER NOT NULL DEFAULT 0;
