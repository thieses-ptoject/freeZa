import { PrismaClient } from "@prisma/client";
import { Request, Response, request } from "express";
const prisma = new PrismaClient();
export const getnotifications=async (req: Request, res: Response)=>{
    try{
    const {reciever}=req.params
    const notifications=await prisma.notifications.findMany({
        where:{
            reciever,
            isRead:'false'
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
     const { senderId, isRead,date, reciever}=req.body
    const notifications =await prisma.notifications.create({
      data:{ 
         senderId,
         isRead:'false',
         date,
         reciever } 
    })
    res.status(200).send(notifications)}
    catch(err){
        res.status(500).send(err)
    }
}
export const updateNotifications=async (req: Request, res: Response)=>{
    try {
  const {reciever,senderId}=req.params

  const updateNotification=await prisma.notifications.deleteMany({
    where :{senderId,reciever},
   
  })
  res.status(200).send(updateNotification)
    }
    catch(err){
        res.status(500).send(err)
    }
}
