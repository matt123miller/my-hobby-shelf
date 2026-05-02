-- CreateTable
CREATE TABLE "Example" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Example_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paint" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hexCode" TEXT NOT NULL,
    "hue" TEXT NOT NULL,
    "chroma" TEXT NOT NULL,
    "luminance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Paint_pkey" PRIMARY KEY ("id")
);
