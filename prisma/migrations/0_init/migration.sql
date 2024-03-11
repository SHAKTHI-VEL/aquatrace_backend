-- CreateTable
CREATE TABLE "activity" (
    "id" SERIAL NOT NULL,
    "activity" TEXT,
    "waterfootprint" DECIMAL,

    CONSTRAINT "activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food" (
    "id" SERIAL NOT NULL,
    "fooditems" TEXT,
    "waterfootprint" DECIMAL,

    CONSTRAINT "food_pkey" PRIMARY KEY ("id")
);

