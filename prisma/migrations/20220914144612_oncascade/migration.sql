-- DropForeignKey
ALTER TABLE "ProductResource" DROP CONSTRAINT "ProductResource_product_id_fkey";

-- DropForeignKey
ALTER TABLE "ProductResource" DROP CONSTRAINT "ProductResource_resource_id_fkey";

-- AddForeignKey
ALTER TABLE "ProductResource" ADD CONSTRAINT "ProductResource_resource_id_fkey" FOREIGN KEY ("resource_id") REFERENCES "Resource"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductResource" ADD CONSTRAINT "ProductResource_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
