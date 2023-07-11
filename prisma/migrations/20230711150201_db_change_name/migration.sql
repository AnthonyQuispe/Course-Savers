/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `user_email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_firstname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_lastname` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `user_username` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `users_user_email_key` ON `users`;

-- DropIndex
DROP INDEX `users_user_username_key` ON `users`;

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    DROP COLUMN `user_email`,
    DROP COLUMN `user_firstname`,
    DROP COLUMN `user_id`,
    DROP COLUMN `user_lastname`,
    DROP COLUMN `user_password`,
    DROP COLUMN `user_username`,
    ADD COLUMN `email` VARCHAR(255) NOT NULL,
    ADD COLUMN `firstname` VARCHAR(255) NOT NULL,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `lastname` VARCHAR(255) NOT NULL,
    ADD COLUMN `password` VARCHAR(255) NOT NULL,
    ADD COLUMN `username` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_username_key` ON `users`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
