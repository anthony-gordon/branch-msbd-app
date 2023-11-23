-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "isOnline" BOOLEAN NOT NULL DEFAULT false,
    "scope" TEXT,
    "expires" DATETIME,
    "accessToken" TEXT NOT NULL,
    "userId" BIGINT
);

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
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedRecord" TEXT NOT NULL DEFAULT ''
);

-- CreateTable
CREATE TABLE "settings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "defaultProcessingTime" INTEGER NOT NULL DEFAULT 2,
    "buffer" INTEGER NOT NULL DEFAULT 5,
    "dtcProcessingTimeMessage" TEXT NOT NULL DEFAULT 'Ships for free #processing_time_description#.',
    "dtcDateAvailableMessage" TEXT NOT NULL DEFAULT 'Ships for free #date_available_description#.',
    "b2bProcessingTimeMessage" TEXT NOT NULL DEFAULT 'Ships with white glove installation #processing_time_description#.',
    "b2bDateAvailableMessage" TEXT NOT NULL DEFAULT 'Ships with white glove installation #date_available_description#.',
    "dtcDefaultShippingRange" INTEGER NOT NULL DEFAULT 1,
    "b2bDefaultShippingRange" INTEGER NOT NULL DEFAULT 1
);

-- CreateTable
CREATE TABLE "updates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updated" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "variantShipDateData_productVariantId_key" ON "variantShipDateData"("productVariantId");
