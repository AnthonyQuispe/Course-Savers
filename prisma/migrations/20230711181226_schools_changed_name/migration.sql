/*
  Warnings:

  - You are about to drop the `school` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_schoolId_fkey`;

-- DropTable
DROP TABLE `school`;

-- CreateTable
CREATE TABLE `Schools` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Schools_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_schoolId_fkey` FOREIGN KEY (`schoolId`) REFERENCES `Schools`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `users_email_key` TO `Users_email_key`;

-- RenameIndex
ALTER TABLE `users` RENAME INDEX `users_username_key` TO `Users_username_key`;
