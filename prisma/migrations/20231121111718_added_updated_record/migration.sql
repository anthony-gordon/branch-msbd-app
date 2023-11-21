-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_variantShipDateData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productHandle" TEXT NOT NULL,
    "productVariantId" TEXT NOT NULL,
    "dateAvailable" TEXT NOT NULL,
    "processingTime" TEXT NOT NULL,
    "shipDateMessage" TEXT NOT NULL,
    "overrideMessage" TEXT NOT NULL,
    "b2bProduct" BOOLEAN NOT NULL DEFAULT false,
    "bundleProduct" BOOLEAN NOT NULL DEFAULT false,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedRecord" TEXT NOT NULL DEFAULT '[]'
);
INSERT INTO "new_variantShipDateData" ("b2bProduct", "bundleProduct", "dateAvailable", "id", "overrideMessage", "processingTime", "productHandle", "productId", "productVariantId", "shipDateMessage", "shop", "title", "updated", "updatedRecord") SELECT "b2bProduct", "bundleProduct", "dateAvailable", "id", "overrideMessage", "processingTime", "productHandle", "productId", "productVariantId", "shipDateMessage", "shop", "title", "updated", "updatedRecord" FROM "variantShipDateData";
DROP TABLE "variantShipDateData";
ALTER TABLE "new_variantShipDateData" RENAME TO "variantShipDateData";
CREATE UNIQUE INDEX "variantShipDateData_productVariantId_key" ON "variantShipDateData"("productVariantId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
