-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_username` VARCHAR(255) NOT NULL,
    `user_email` VARCHAR(255) NOT NULL,
    `user_password` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
