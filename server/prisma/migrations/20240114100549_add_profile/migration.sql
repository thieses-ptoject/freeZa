-- CreateTable
CREATE TABLE "Messages" (
    "id" SERIAL NOT NULL,
    "message" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "recieverId" TEXT NOT NULL,

    CONSTRAINT "Messages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Messages" ADD CONSTRAINT "Messages_recieverId_fkey" FOREIGN KEY ("recieverId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
