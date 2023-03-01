/*
  Warnings:

  - You are about to drop the column `airportIdFrom` on the `routes` table. All the data in the column will be lost.
  - You are about to drop the column `airportIdTo` on the `routes` table. All the data in the column will be lost.
  - Added the required column `airportFromId` to the `routes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `airportToId` to the `routes` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_routes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "airportFromId" TEXT NOT NULL,
    "airportToId" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_routes" ("createdAt", "duration", "id", "updatedAt") SELECT "createdAt", "duration", "id", "updatedAt" FROM "routes";
DROP TABLE "routes";
ALTER TABLE "new_routes" RENAME TO "routes";
CREATE UNIQUE INDEX "routes_airportFromId_key" ON "routes"("airportFromId");
CREATE UNIQUE INDEX "routes_airportToId_key" ON "routes"("airportToId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
