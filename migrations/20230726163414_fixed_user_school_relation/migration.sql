/*
  Warnings:

  - You are about to drop the column `schoolsId` on the `users` table. All the data in the column will be lost.
  - Added the required column `schoolsName` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_schoolsId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `schoolsId`,
    ADD COLUMN `schoolsName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_schoolsName_fkey` FOREIGN KEY (`schoolsName`) REFERENCES `Schools`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
