/*
  Warnings:

  - Added the required column `created_at` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `register_date` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "created_at" TIMESTAMP NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "register_date" TIMESTAMP NOT NULL;
