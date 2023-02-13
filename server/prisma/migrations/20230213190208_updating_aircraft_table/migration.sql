/*
  Warnings:

  - You are about to drop the column `firstSeatLetter` on the `aircrafts` table. All the data in the column will be lost.
  - You are about to drop the column `firstSeatNumber` on the `aircrafts` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeatLetter` on the `aircrafts` table. All the data in the column will be lost.
  - You are about to drop the column `lastSeatNumber` on the `aircrafts` table. All the data in the column will be lost.
  - Added the required column `firstSeat` to the `aircrafts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastSeat` to the `aircrafts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_aircrafts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "firstSeat" TEXT NOT NULL,
    "lastSeat" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_aircrafts" ("code", "createdAt", "id", "updatedAt") SELECT "code", "createdAt", "id", "updatedAt" FROM "aircrafts";
DROP TABLE "aircrafts";
ALTER TABLE "new_aircrafts" RENAME TO "aircrafts";
CREATE UNIQUE INDEX "aircrafts_code_key" ON "aircrafts"("code");
CREATE INDEX "aircrafts_code_idx" ON "aircrafts"("code");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
