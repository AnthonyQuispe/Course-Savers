-- DropIndex
DROP INDEX `Users_schoolsId_fkey` ON `users`;

-- AddForeignKey
ALTER TABLE `Users` ADD CONSTRAINT `Users_schoolsId_fkey` FOREIGN KEY (`schoolsId`) REFERENCES `Schools`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
