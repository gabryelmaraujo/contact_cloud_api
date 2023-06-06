/*
  Warnings:

  - You are about to drop the column `created_at` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `register_date` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "contacts" DROP COLUMN "created_at";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "register_date";
