import { PrismaClient } from "@prisma/client";
import { Request, Response, request } from "express";
const prisma = new PrismaClient();
export const getnotifications=async (req: Request, res: Response)=>{
    try{
    const {reciever}=req.params
    const notifications=await prisma.notificationsRate.findMany({
        where:{
            reciever,
            isRead:false
        },
        include:{
            sendernotificationRate:true
        }
    })
    res.status(200).send(notifications)
}
    catch(err){
        res.status(500).send(err)
    }

}
export const addnotification=async (req: Request, res: Response)=>{
  try{ 
     const { senderId,date, reciever,rate}=req.body
    const notifications =await prisma.notificationsRate.create({
      data:{ 
         senderId,
         date,
         reciever ,
         rate:+rate} 
    })
    res.status(200).send(notifications)}
    catch(err){
        res.status(500).send(err)
    }
}
export const updateNotifications=async (req: Request, res: Response)=>{
    try {
  const {reciever,senderId}=req.params

  const updateNotification=await prisma.notificationsRate.deleteMany({
    where :{senderId,reciever},
   
  })
  res.status(200).send(updateNotification)
    }
    catch(err){
        res.status(500).send(err)
    }
}
