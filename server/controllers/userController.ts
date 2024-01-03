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
    address: string;
    phone: string;
    
  }  

export const addUser = async(req: Request, res: Response)=>{
//     try{
//       const {id,firstName,lastName,email, image, address,phone} : User  = req.body
//       const query = await prisma.user.create({
//       data:{ 
//         id:id,
//         firstName:firstName,
//         lastName:lastName
//         ,email:email,
//          image:image, 
//          address:address,
//          phone: phone}
//       })
//       res.send(query)
//     }catch(error){
//         res.send(error)
//         console.log(error)
//     }
    
}
export const getUser = async (req: Request, res: Response) => {
    try {
      const email = req.params.email;
      const query = await prisma.user.findMany({
        where: {
          email: email,
        },
      });
      if (query) {
        res.send(query);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  };
  