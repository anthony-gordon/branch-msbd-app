-- CreateTable
CREATE TABLE "variantShipDateData" (
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
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "variantShipDateData_productVariantId_key" ON "variantShipDateData"("productVariantId");
