/*
  Warnings:

  - You are about to drop the column `register_date` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `created_ad` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "register_date",
ADD COLUMN     "created_ad" TEXT NOT NULL;
