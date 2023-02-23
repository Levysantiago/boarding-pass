/*
  Warnings:

  - A unique constraint covering the columns `[passengerId]` on the table `seats` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "seats_passengerId_key" ON "seats"("passengerId");
