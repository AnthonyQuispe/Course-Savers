/*
  Warnings:

  - You are about to drop the column `school` on the `users` table. All the data in the column will be lost.
  - Added the required column `campusId` to the `Users` table without a default value. This is not possible if the table is not empty.
  - Made the column `schoolsId` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `Users_schoolsId_fkey`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `school`,
    ADD COLUMN `campusId` INTEGER NOT NULL,
    MODIFY `schoolsId` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Degrees` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `campusId` INTEGER NOT NULL,
    `credits` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_schoolsId_fkey` FOREIGN KEY (`schoolsId`) REFERENCES `Schools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_campusId_fkey` FOREIGN KEY (`campusId`) REFERENCES `Campus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Degrees` ADD CONSTRAINT `Degrees_campusId_fkey` FOREIGN KEY (`campusId`) REFERENCES `Campus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
