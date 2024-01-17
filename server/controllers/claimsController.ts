import {PrismaClient} from "@prisma/client"
import { Request, Response, request } from "express";
const prisma = new PrismaClient();

export const OneDisc= async (req:Request,res:Response)=>{
    const {adminId,userId}= req.params 
    try {
        const findManychat=await prisma.claims.findMany({
            where:{
                userId:userId,
                adminId:adminId,
            },
            
           }) 
           const findManychatS=await prisma.claims.findMany({
            where:{
                userId:userId,
                adminId:adminId,
            },
          
           }) 
           const allchat=findManychatS.concat(findManychat)
      const allchat1=allchat.sort((a,b)=>a.createdAt.getTime()-b.createdAt.getTime())
       res.status(200).send(allchat1)
        
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
//  export const getDiscussions= async (req:Request,res:Response)=>{
//     const {adminId}=req.params 
//     try {
//         const findchatreceved=await prisma.claims
        
//     } catch (error) {
        
//     }
// }