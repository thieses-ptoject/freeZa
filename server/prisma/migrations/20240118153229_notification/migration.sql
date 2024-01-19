-- CreateTable
CREATE TABLE "Notifications" (
    "id" SERIAL NOT NULL,
    "isRead" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "senderId" TEXT NOT NULL,
    "reciever" TEXT NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_reciever_fkey" FOREIGN KEY ("reciever") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
