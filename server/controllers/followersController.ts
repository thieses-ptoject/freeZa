import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const follow = async(req:Request,res:Response)=>{
    const {followerId, followedId }=req.body
    try{
    if(typeof followerId==='number' && typeof followedId==='number'){res.status(500).send('give a valid ')}
    else{
        const existingfCount = await prisma.giversFollowed.count({
            where: { followerId:followerId,
                     followedId:followedId },
          });
          if(existingfCount>0){
            const unfollow =await prisma.giversFollowed.deleteMany({
                where: { followerId  },
              });
              res.status(200).send(unfollow)
          }

          else{
        const following= await prisma.giversFollowed.create({data:{
            followerId:followerId,
            followedId:followedId

        }})
    res.status(200).send(following)}}
    }catch(err){
        res.status(500).send(err)
    }

    
}
export const getUserFollow= async (req:Request,res:Response)=>{
    const {followerId}=req.params
    try {
        const following  = await prisma.giversFollowed.findMany({
            where: { followerId  },
            include: {
                followed:true,
            
              },
          });
       res.status(200).send(following)
    }
  catch(err){
     res.status(500).send(err)
  }
 


}
export const getUserFollowing= async (req:Request,res:Response)=>{
    const {followedId}=req.params
    try {
        const following  = await prisma.giversFollowed.findMany({
            where: { followedId  },
            include: {
                follower:true,
              },
          });
       res.status(200).send(following)
    }
  catch(err){
     res.status(500).send(err)
  }}

  
  export const deletef=async(req:Request,res:Response)=>{
    const {Id}=req.params
    try{
        const deleted= await prisma.giversFollowed.deleteMany(
            { where: { id: +Id }}
        )
        res.status(200).send(deleted)
    }
    catch(err){
        res.status(500).send(err)
    }
  }