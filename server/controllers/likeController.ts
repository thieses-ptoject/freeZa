import { PrismaClient } from "@prisma/client";
import {like} from "../type"
import { Request, Response } from "express";
const prisma = new PrismaClient();




 // add like:

 export const addLike = async(req:Request,res:Response)=>{
    const { postId }=req.body
    const {userId }=req.params
    try{
        const existingLikeCount = await prisma.like.count({
            where:{ postId:postId,
                likerId:userId  },
          });
          if(existingLikeCount>0){
            const unlike =await prisma.like.deleteMany({
                where: { 
                    postId:postId,
                    likerId:userId  },
              });
              res.status(200).send(unlike)
          }

          else{
        const newLike= await prisma.like.create({
            data:{ 
            postId:postId,
             likerId:userId 
         }
        })
    
        res.status(200).send(newLike)}

    }catch(err){
        res.status(500).send(err)
    }
}

// get all likes of one Post 

export const getPostLikes= async (req:Request,res:Response)=>{
    const {postId} =req.params
    const  {id}=req.params
    try {
        const postlikes  = await prisma.like.findMany({
            where: { postId: +postId },
            include:{
                user : true
            }
          });
          const arr1=postlikes.filter((ele )=>{return ele.user.id===id})
          const arr= postlikes.map((ele)=> { return {firstName:ele.user.firstName,lastName: ele.user.lastName, image: ele.user.image }})
       res.status(200).send({all:arr,like:arr1.length===1})
    }
  catch(err){
     res.status(500).send(err)
  }
}