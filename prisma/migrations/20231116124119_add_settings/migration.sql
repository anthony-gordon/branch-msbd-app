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
