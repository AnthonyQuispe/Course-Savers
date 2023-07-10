/*
  Warnings:

  - Added the required column `user_firstname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_lastname` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `user_firstname` VARCHAR(255) NOT NULL,
    ADD COLUMN `user_lastname` VARCHAR(255) NOT NULL;
