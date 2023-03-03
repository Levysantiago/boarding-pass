-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_flights" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "routeId" TEXT NOT NULL,
    "aircraftCode" TEXT NOT NULL,
    "finishBookingTime" DATETIME NOT NULL,
    "boardingTime" DATETIME NOT NULL,
    "boardingEndingTime" DATETIME NOT NULL,
    "flightTime" DATETIME NOT NULL,
    "arrivalTime" DATETIME NOT NULL,
    "terminal" TEXT NOT NULL,
    "gate" TEXT NOT NULL,
    "flightPrice" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "flights_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "routes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_flights" ("aircraftCode", "arrivalTime", "boardingEndingTime", "boardingTime", "createdAt", "finishBookingTime", "flightPrice", "flightTime", "gate", "id", "routeId", "terminal", "updatedAt") SELECT "aircraftCode", "arrivalTime", "boardingEndingTime", "boardingTime", "createdAt", "finishBookingTime", "flightPrice", "flightTime", "gate", "id", "routeId", "terminal", "updatedAt" FROM "flights";
DROP TABLE "flights";
ALTER TABLE "new_flights" RENAME TO "flights";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
