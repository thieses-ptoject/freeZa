-- CreateTable
CREATE TABLE "NotificationsRate" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "reciever" TEXT NOT NULL,

    CONSTRAINT "NotificationsRate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotificationsRate" ADD CONSTRAINT "NotificationsRate_reciever_fkey" FOREIGN KEY ("reciever") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationsRate" ADD CONSTRAINT "NotificationsRate_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
