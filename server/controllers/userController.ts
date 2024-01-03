import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    strawberries: number;
    rate: number;
    level: string;
    accountType: boolean;
    nbrOfDonation: number;
    nbrOfTakes: number;
    adress: string;
    phone: string
  }  

export const addUser = async(req: Request, res: Response)=>{
    try{
      const {id,firstName,lastName,email, image, adress, phone}: User = req.body
    //   const userData  = {id, firstName, lastName, email, image,adress , phone} 
      const query = await prisma.user.create({
        data: req.body
      })
      res.send(query)
    }catch(error){
        console.log(error)
    }
    
}