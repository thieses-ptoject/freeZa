import { PrismaClient } from "@prisma/client";
import { Request, Response, request } from "express";
const prisma = new PrismaClient();
export const getAllsender = async(req:Request,res:Response)=>{
    const {recieverId,senderId}=req.params
    try{
       const findManychat=await prisma.messages.findMany({
        where:{
            recieverId:recieverId,
            senderId:senderId,
        },
        include:{
            recivermessage:true,
            sender:true,
        }
       }) 
   res.status(200).send(findManychat)


    }
    catch (err){
res.status(500).send(err)
    }
}
export const createChat=(req:Request,res:Response)=>{
 const {message,recieverId,senderId}=req.body
 try{
 const creatChat=prisma.messages.create({
  data:{
    message:message, 
    senderId :senderId,
   recieverId :recieverId
  }  
})
res.status(200).send(creatChat)
 }
 catch(err){
    res.status(500).send(err)
 }

}
export const getDiscutions =async (req:Request,res:Response)=>{
    const {userId}=req.params
    try{
       const findchatrecieved=await prisma.messages.findMany({
        where:{
            recieverId:userId
        },   
        include:{
                recivermessage:true,
                 sender:true,
                    }
                
       }) 
    const   findchatsend=await prisma.messages.findMany({
        where:{
            senderId:userId
        },   
        include:{
                recivermessage:true,
                 sender:true,
                    }
                
       }) 
  const allchat=findchatrecieved.concat(findchatsend)
   res.status(200).send(findchatrecieved)


    }
    catch (err){
res.status(500).send(err)
    }
}