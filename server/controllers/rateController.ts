import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const rateUser = async(req:Request,res:Response)=>{
    const {raterId}=req.params
    const {nbrOfStars,comments ,ratedId}  =req.body    
    try{
        const rateduser=await prisma.rate.count({where:{
            ratedId,
            raterId
        }})
        if(rateduser>0){
           const updateRate=await prisma.rate.updateMany(
            {
            where:{raterId,ratedId}
            ,data:{
            nbrOfStars
            ,comments
            ,ratedId}})  }
             else{
      const rating=await prisma.rate.create({
           data:{
            raterId,
            nbrOfStars
            ,comments
             ,ratedId
           } 
        })}
        const rated=await prisma.rate.findMany({where : {ratedId}})
        
      const ratedAcc=  rated.reduce((acc,value)=>{return acc + value.nbrOfStars},0)
     let rate:number=ratedAcc/rated.length
    const user =await prisma.user.update({ where: {
       id: ratedId,
      },
      data: {
        rate: rate
      },})


 res.status(200).send(user)

    }
    catch(err){res.status(500).send(err)}

}


export const getRaters= async (req:Request,res:Response)=>{
  const {ratedId}=req.params
  try {
      const ratining  = await prisma.rate.findMany({
          where: { ratedId  },
          include: {
              rater:true,
          
            },
        });
     res.status(200).send(ratining)
  }
catch(err){
   res.status(500).send(err)
}
}