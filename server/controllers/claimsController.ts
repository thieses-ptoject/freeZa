import {PrismaClient} from "@prisma/client"
import { Request, Response, request } from "express";
const prisma = new PrismaClient();

export const OneDisc= async (req:Request,res:Response)=>{
    const {adminId,userId}= req.params 
    try {
        const UserClaims=await prisma.claims.findMany({
            where:{
                userId:userId,
                adminId:adminId,
        

            },
            
           }) 
           await prisma.claims.updateMany({
            where:{
                userId:userId,
                adminId: adminId,
                isRead: false 
        
            },
            data: {
                isRead: true 
            }
           })
           
          
        //    const allchat=findManychat.concat(findManychat)
      const allchat1=UserClaims.sort((a:any,b:any)=>a.createdAt.getTime()-b.createdAt.getTime())
       res.status(200).send(allchat1)
        
    } catch (error) {
        res.status(500).send(error)
        
    } 
} 
export const UnreadClaims = async (req:Request,res:Response)=>{
    const {adminId,userId}= req.params 
    try {
        const UserClaims= await prisma.claims.findMany({
            where:{
                userId:userId,
                adminId:adminId,
                isRead : false 
            }, 
            
           }) 
        
           
          
        //    const allchat=findManychat.concat(findManychat)
      const UnreadClaims=UserClaims.sort((a:any,b:any)=>a.createdAt.getTime()-b.createdAt.getTime())
       res.status(200).send(UnreadClaims)
        
    } catch (error) {
        res.status(500).send(error)
        
    } 
} 
 




    export const newChat = async (req:Request,res:Response)=>{
        const {claim}=req.body
        const {userId,adminId}=req.params
        try{
        const creatChat=await prisma.claims.create({
         data:{
           claim:claim,
           adminId:adminId,
           userId:userId
          
         }  
       })
       res.status(200).send(creatChat)
        }
        catch(err){
           res.status(500).send(err)
        } 
    }

 export const getDiscussions= async (req:Request,res:Response)=>{
    const {adminId}=req.params
    try {
        const Allclaims=await prisma.claims.findMany({
            where: {
                adminId: adminId,
              }
}) 
   res.status(200).send(Allclaims)
        
    } catch (error) {
        console.error('Error retrieving claims:', error);
    res.status(500).send('Internal Server Error');
        
    }
}