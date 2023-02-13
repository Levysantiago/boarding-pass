/*
  Warnings:

  - Added the required column `side` to the `seats` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_seats" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "flightId" TEXT NOT NULL,
    "seatTypeId" TEXT NOT NULL,
    "passengerId" TEXT,
    "code" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "seats_flightId_fkey" FOREIGN KEY ("flightId") REFERENCES "flights" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "seats_seatTypeId_fkey" FOREIGN KEY ("seatTypeId") REFERENCES "seat_types" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "seats_passengerId_fkey" FOREIGN KEY ("passengerId") REFERENCES "passengers" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_seats" ("code", "createdAt", "flightId", "id", "passengerId", "seatTypeId", "updatedAt") SELECT "code", "createdAt", "flightId", "id", "passengerId", "seatTypeId", "updatedAt" FROM "seats";
DROP TABLE "seats";
ALTER TABLE "new_seats" RENAME TO "seats";
CREATE INDEX "seats_flightId_passengerId_idx" ON "seats"("flightId", "passengerId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
