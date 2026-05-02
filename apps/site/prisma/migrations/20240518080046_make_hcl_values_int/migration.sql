/*
  Warnings:

  - Changed the type of `hue` on the `Paint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `chroma` on the `Paint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `luminance` on the `Paint` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Paint" DROP COLUMN "hue",
ADD COLUMN     "hue" INTEGER NOT NULL,
DROP COLUMN "chroma",
ADD COLUMN     "chroma" INTEGER NOT NULL,
DROP COLUMN "luminance",
ADD COLUMN     "luminance" INTEGER NOT NULL;
