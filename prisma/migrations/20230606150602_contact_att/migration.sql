/*
  Warnings:

  - You are about to drop the column `created_ad` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "created_ad",
ADD COLUMN     "created_at" TEXT NOT NULL;
