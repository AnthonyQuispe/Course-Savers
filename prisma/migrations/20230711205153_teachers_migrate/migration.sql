/*
  Warnings:

  - You are about to drop the `semester` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `semester` DROP FOREIGN KEY `Semester_campusId_fkey`;

-- AlterTable
ALTER TABLE `buildings` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `campus` MODIFY `name` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `degrees` MODIFY `name` VARCHAR(255) NOT NULL;

-- DropTable
DROP TABLE `semester`;

-- CreateTable
CREATE TABLE `Semesters` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `campusId` INTEGER NOT NULL,
    `year` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Teachers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Semesters` ADD CONSTRAINT `Semesters_campusId_fkey` FOREIGN KEY (`campusId`) REFERENCES `Campus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
