/*
  Warnings:

  - You are about to drop the column `Date` on the `userdata` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "userdata" DROP COLUMN "Date",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
