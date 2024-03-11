-- CreateTable
CREATE TABLE "userdata" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "waterfootprint" DECIMAL(65,30) NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "userdata_pkey" PRIMARY KEY ("id")
);
