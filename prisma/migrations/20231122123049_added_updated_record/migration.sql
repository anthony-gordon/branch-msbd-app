-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_updates" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "updated" TEXT NOT NULL
);
INSERT INTO "new_updates" ("id", "updated") SELECT "id", "updated" FROM "updates";
DROP TABLE "updates";
ALTER TABLE "new_updates" RENAME TO "updates";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
