import { Comments, PrismaClient } from "@prisma/client";
import {comments} from "../type"
import { Request, Response } from "express";
const prisma = new PrismaClient();

 // create new Comment:

export const addNewComment = async (
  req: Request,
  res: Response
): Promise<void> => {
      try {
          const { body , postId} : comments  = req.body;
          const { userId } = req.params
          const newComments = await prisma.comments.create({
            data : {
              body,
              userId: userId,
              postId:+postId,
            }
          });
          res.status(201).json(newComments);
        }   catch (error) {
        console.log(error)
          res.status(500).send(error)
      }
};

export const getallcommentOfonePost = async (
  req: Request,
  res: Response
): Promise<void> => {
        try {
            const { postId} : comments = req.body;
            const getComments = await prisma.comments.findMany({
              where :{
                  postId:postId
              },
              include:{
                user:true
              }
            });
            res.status(201).json(getComments);
          }   catch (error) {
          console.log(error)
            res.status(500).send(error)
        }
};

export const updateComment = async (
  req: Request,
  res: Response
): Promise<void> => {
          try {
              const { body, postId, commentId}  = req.body;
              const { userId}  = req.params;
              const updateComments = await prisma.comments.update({
                where: {
                  id: +commentId,
                },
                data: {
                  body,
                  postId,
                  userId: userId
                },
              });
              res.status(201).json(updateComments);
            }   catch (error) {
            console.log(error)
              res.status(500).send(error)
          }
};

export const deleteoneComment = async (
  req: Request,
  res: Response
): Promise<void> => {
            try {
              const { userId } = req.params
              const { commentId, postId } = req.body
              const deletecomment = await prisma.comments.delete({
                where: {
                  id: +commentId,
                  postId,
                  userId
                },
              });
              res.status(200).json(deletecomment );
            }catch (error) {
              res.status(500).json(error);
          }
};

export const deleteAllCommentS = async (
  req: Request,
  res: Response
): Promise<void> => {
            try {
              const { userId } = req.params
              const {  postId } = req.body
              const getUser =await prisma.posts.findUnique({
                where:{
                  id: +postId
                }
              })
              console.log(getUser);
              if (getUser?.userId === userId){
                const deletecomment = await prisma.comments.deleteMany({
                  where: {
                    postId:postId,
                  },
                });
                res.status(203).json(deletecomment );
              }
             else{
              res.status(403).send('not allowed')
             }
            }catch (error) {
              res.status(500).json(error);
          }
};
