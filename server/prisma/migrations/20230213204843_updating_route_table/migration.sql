/*
  Warnings:

  - Added the required column `airportIdFrom` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_routes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "airportIdFrom" TEXT NOT NULL,
    "airportIdTo" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_routes" ("airportIdTo", "createdAt", "duration", "id", "updatedAt") SELECT "airportIdTo", "createdAt", "duration", "id", "updatedAt" FROM "routes";
DROP TABLE "routes";
ALTER TABLE "new_routes" RENAME TO "routes";
CREATE UNIQUE INDEX "routes_airportIdFrom_key" ON "routes"("airportIdFrom");
CREATE UNIQUE INDEX "routes_airportIdTo_key" ON "routes"("airportIdTo");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
