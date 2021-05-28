/*
  Warnings:

  - You are about to drop the column `authorId` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Post` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Tag` table. All the data in the column will be lost.
  - You are about to drop the `Article` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `BooklistBookLink` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Book` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ArticleToTag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Booklist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Member` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `Tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `Tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `BooklistBookLink` DROP FOREIGN KEY `BooklistBookLink_ibfk_1`;

-- DropForeignKey
ALTER TABLE `BooklistBookLink` DROP FOREIGN KEY `BooklistBookLink_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Profile` DROP FOREIGN KEY `Profile_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_ArticleToTag` DROP FOREIGN KEY `_ArticleToTag_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_ArticleToTag` DROP FOREIGN KEY `_ArticleToTag_ibfk_2`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_ibfk_1`;

-- DropIndex
DROP INDEX `Tag.label_unique` ON `Tag`;

-- AlterTable
ALTER TABLE `Post` DROP COLUMN `authorId`,
    DROP COLUMN `content`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `Tag` DROP COLUMN `label`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Article`;

-- DropTable
DROP TABLE `BooklistBookLink`;

-- DropTable
DROP TABLE `Profile`;

-- DropTable
DROP TABLE `Book`;

-- DropTable
DROP TABLE `_ArticleToTag`;

-- DropTable
DROP TABLE `Booklist`;

-- DropTable
DROP TABLE `Member`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `PostTags` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `postId` INTEGER,
    `tagId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Tag.name_unique` ON `Tag`(`name`);

-- AddForeignKey
ALTER TABLE `PostTags` ADD FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PostTags` ADD FOREIGN KEY (`tagId`) REFERENCES `Tag`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
