import { PrismaClient } from "@prisma/client";
import { Request, Response, query } from "express";
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
    nbrOfStars: number;
    
  }  


export const addUser = async(req: Request, res: Response)=>{
    try{
      const {id,firstName,lastName,email, image, address,phone} : User  = req.body
      const query = await prisma.user.create({
      data:{ 
        id:id,
        firstName:firstName,
        lastName:lastName
        ,email:email,
         image:image, 
         address:address,
         phone: phone}
      })
      res.send(query)
    }catch(error){
        res.send(error)
        console.log(error)
    }
    
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
  export const addFreeza = async (req: Request, res: Response)=>{
    try{
      const query = await prisma.user.update({
        where:{
          email: req.body.email
        },
        data :{
          strawberries : {
            increment: req.body.strawberries
          }
        }
      })
      res.send(query)
    }catch(error){
      res.send(error)
    }
  }
  export const updateUser = async (req:Request, res: Response)=>{
    try{
      const query = await prisma.user.update({
        where: {
          email: req.params.email
        },
        data :{
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         address: req.body.address,
         phone: req.body.phone,
         email: req.body.email

        }
      
      }
      )
      res.send(query)
    }catch(error){
      console.log(error)
      res.send(error)
    }
  }
  export const deleteUser = async (req: Request, res: Response)=>{
    try{
      const query =  await prisma.user.delete({
        where: {
          id: req.params.id
        },
      })
      res.send(query)
    }catch(error){
      res.send(error)
      console.log(error)
    }
  }
  
//   export const updateRate = async (req: Request, res: Response) => {
//   try {
//     const userEmail = req.body.email;
//     const user = await prisma.user.findUnique({
//       where: {
//         email: userEmail,
//       },
//     });

//     if (!user) {
//       return res.status(404).send("User not found");
//     }

//     const rateId =req.body.rateId  /* get the rateId from your request body or another source */;
//     const newVote = req.body.vote /* get the new vote value from your request body */;

//     // Find the existing rate record
//     const existingRateRecord = await prisma.rate.findUnique({
//       where: {
//         id: rateId,
//       },
//     });

//     if (!existingRateRecord) {
//       return res.status(404).send("Rate record not found");
//     }

//     // Update the rate record with the new vote
//     const updatedRateRecord = await prisma.rate.update({
//       where: {
//         id: rateId,
//       },
//       data: {
//         nbrOfStars: [...(existingRateRecord.nbrOfStars || []), newVote], // Ensure nbrOfStars is an array
//       },
//     });

//     // Calculate the average rating
//     const averageRating = updatedRateRecord.nbrOfStars.reduce((sum, rating) => sum + rating, 0) / updatedRateRecord.nbrOfStars.length;

//     res.send({ averageRating });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   } 
// };
