import { PrismaClient } from "@prisma/client";
import {posts} from "../type"
import { Request, Response } from "express";
const prisma = new PrismaClient();




 // create new post:

export const addNewPost = async(req:Request,res:Response): Promise<void>=>{
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


    export const getallPost = async (req: Request, res: Response): Promise<void> => {
        try {
          const post = await prisma.posts.findMany()
          if (post) {
            res.status(200).json(post);
          } else {
            res.status(200).json([]);
          }
        } catch (error) {
            res.status(500).json(error);
        }
      }




      export const getAllPostofOneUser = async (req: Request, res: Response): Promise<void> => {
        try {
        const {userId} = req.params
          const post = await prisma.posts.findMany({
            where :{
                userId:userId
            }
        })
          if (post) {
            res.status(200).json(post);
          } else {
            res.status(200).json([]);
          }
        } catch (error) {
            res.status(500).json(error);
        }
      }



      export const updatePost = async (req: Request, res: Response): Promise<void> => {
        try {
            const { image , body }  = req.body;
            const { postId, userId } = req.params
         
          const updatedPost = await prisma.posts.update({
            where: {
              id: +postId,
            },
            data: {
              image,
              body,
              userId,
            },
          });
      
          res.status(200).json(updatedPost);
        }catch (error) {
          res.status(500).json(error);
      }
      }
      


      export const deletePost = async (req: Request, res: Response): Promise<void> => {
        try {
          const { postId, userId } = req.params
          const deletePost = await prisma.posts.delete({
            where: {
              id: +postId,
            },
          });
      
          res.status(200).json(deletePost);
        }catch (error) {
          res.status(500).json(error);
      }
      }

