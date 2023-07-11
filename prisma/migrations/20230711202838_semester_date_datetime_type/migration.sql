/*
  Warnings:

  - You are about to alter the column `startDate` on the `semester` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - You are about to alter the column `endDate` on the `semester` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.

*/
-- AlterTable
ALTER TABLE `semester` MODIFY `startDate` DATETIME(3) NOT NULL,
    MODIFY `endDate` DATETIME(3) NOT NULL;
