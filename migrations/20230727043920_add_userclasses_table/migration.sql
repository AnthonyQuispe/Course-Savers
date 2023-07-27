-- CreateTable
CREATE TABLE `UserClasses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userEmail` VARCHAR(191) NOT NULL,
    `classId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `UserClasses` ADD CONSTRAINT `UserClasses_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `Users`(`email`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserClasses` ADD CONSTRAINT `UserClasses_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `Classes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
