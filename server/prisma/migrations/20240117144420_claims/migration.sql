-- CreateTable
CREATE TABLE "Claims" (
    "id" SERIAL NOT NULL,
    "claim" TEXT NOT NULL,
    "adminId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Claims_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Claims" ADD CONSTRAINT "Claims_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
