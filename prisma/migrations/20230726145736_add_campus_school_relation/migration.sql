/*
  Warnings:

  - Added the required column `schoolName` to the `Campus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `campus` ADD COLUMN `schoolName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Campus` ADD CONSTRAINT `Campus_schoolName_fkey` FOREIGN KEY (`schoolName`) REFERENCES `Schools`(`name`) ON DELETE RESTRICT ON UPDATE CASCADE;
