/*
  Warnings:

  - Added the required column `teacherId` to the `Classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `classes` ADD COLUMN `teacherId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Teachers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Classes` ADD CONSTRAINT `Classes_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `Teachers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
