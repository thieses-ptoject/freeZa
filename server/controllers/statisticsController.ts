import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const statisticType = async(req:Request,res:Response)=>{
    const {typeId}=req.params
    try {
        const SameType= await prisma.item.findMany({
            where:{typeId:+typeId},
           

          }) 
          const allItem=await prisma.item.findMany() 
          const stat:number=SameType.length*100/allItem.length

          res.status(200).send({stattype:stat})
    }catch(err){
        res.status(500).send(err)

    }
    
}
export const itemstatistic=async (req:Request,res:Response)=>{
    try{
        const itemreserved= await prisma.item.findMany({
            where:{state:'reserved'}
        })
        const itemtaken= await prisma.item.findMany({
            where:{state:'taken'}
        })
        const itemavailable= await prisma.item.findMany({
            where:{state:'available'}
        })
        const allItem=await prisma.item.findMany() 
       const taken:number =itemtaken.length*100/allItem.length
       const reserved:number =itemreserved.length*100/allItem.length
       const available:number=itemreserved.length*100/allItem.length
    //    res.status(200).send({taken,reserved,available}) 
       const data = [
        { name: 'taken', value: taken },
        { name: 'reserved', value: reserved },
        { name: 'available', value: available }
    ]; 
    res.status(200).send(data)

    }
    catch(err){res.status(500).send(err)}
}
export const appointementStatistics=async(req:Request,res:Response)=>{
    try{
        const appointementAchieved= await prisma.appointments.findMany({
            where:{status:true}
        })
        const appointementNotAchieved= await prisma.appointments.findMany({
            where:{status:false}
        })
        const allAppointment=await prisma.appointments.findMany()
        const achieved=appointementAchieved.length*100/allAppointment.length
        const notAchieved= appointementNotAchieved.length*100/allAppointment.length
        // res.status(200).send({achieved,notAchieved})
        const data= [
            {name:'achieved',value:achieved},
            {name:'not achieved',value:notAchieved}
        ] 
        res.status(200).send(data)
    }
    catch(err){
        res.status(500).send(err)
    }
}