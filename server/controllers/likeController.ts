import { PrismaClient } from "@prisma/client";
import {posts} from "../type"
import { Request, Response } from "express";
const prisma = new PrismaClient();




 // add post:

export const addLike = async(req:Request,res:Response): Promise<void>=>{
    try {
        const { image , body } : posts = req.body;
        const { userId } = req.params

        const newPost = await prisma.posts.create({
          data: {
            image: image,
            body: body,
            userId: userId
          }
        });
        res.status(201).json(newPost);
      }   catch (error) {
      console.log(error)
        res.status(500).send(error)  
    }
    } 