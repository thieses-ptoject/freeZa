import { PrismaClient } from "@prisma/client";
import { Request, Response, request } from "express";
const prisma = new PrismaClient();
export const getONeDisc = async(req:Request,res:Response)=>{
    const {userId,senderId}=req.params
    try{
       const findManychat=await prisma.messages.findMany({
        where:{
            recieverId:userId,
            senderId:senderId,
        },
        
       }) 
       const findManychatS=await prisma.messages.findMany({
        where:{
            recieverId:senderId,
            senderId:userId,
        },
      
       }) 
       const allchat=findManychatS.concat(findManychat)
  const allchat1=allchat.sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime())
   res.status(200).send(allchat1)


    }
    catch (err){
res.status(500).send(err)
    }
}
export const createChat=async (req:Request,res:Response)=>{
 const {message,recieverId,senderId}=req.body
 try{
 const creatChat=await prisma.messages.create({
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
  const latestMessages: { [key: string]: typeof allchat[0] } = {};

  // Iterate through allChat to find the latest message for each user
  allchat.forEach((message) => {
    const otherUserId = message.senderId === userId ? message.recieverId : message.senderId;

    if (!latestMessages[otherUserId] || message.createdAt > latestMessages[otherUserId].createdAt) {
      latestMessages[otherUserId] = message;
    }
  });

  // Convert the values of the dictionary back to an array
  const latestMessagesArray = Object.values(latestMessages);
  const allchat1=latestMessagesArray.sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime())
   res.status(200).send(allchat1)


    }
    catch (err){
res.status(500).send(err)
    }
}