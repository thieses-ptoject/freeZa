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
      console.log(req.body)
      const query = await prisma.user.create({
      data:{ 
        id:id,
        firstName:firstName,
        lastName:lastName,
        email:email,
        image:image, 
        address:address,
        phone: phone
      }
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
        res.send(query[0]);
      } else {
        res.status(404).send("User not found");
      }
    } catch (error) {
      res.status(500).send(error);
      console.log(error);
    }
  };
  export const getUserId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const query = await prisma.user.findMany({
        where: {
          id: id,
        },
      });
      if (query) {
        res.send(query[0]);
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
         image:req.body.image,
         address: req.body.address,
         phone: req.body.phone,

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
      const id = req.params.id
      console.log(id,typeof id )
      const query =  await prisma.user.delete({
        where: {
          id:id
        }
      })
      res.send("deleted")
    }catch(error){
      res.send(error)
      console.log(error)
    }
  }
   export const GetAllUsers = async (re:Request,res:Response)=>{
   try {
    const All= await prisma.user.findMany()
    if(All){
      res.status(200).send(All)
    } else {
      res.status(200).json([])
    }
    
   } catch (error) {
    res.status(500).json(error)
    
   } 
  }
  
