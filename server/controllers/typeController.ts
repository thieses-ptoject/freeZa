import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const Addtype = async (req: Request, res: Response): Promise<void> =>{
    const categoryId= parseInt(req.params.categoryId)
    try {
        const category = await prisma.category.findUnique({
            where: { id: categoryId }
        })
        if (!category) {
            res.status(404).send({ error: 'Category not found' });
            return;
        } 
        const type=req.body
        const newType= await prisma.types.create({
            data:{
                type,
                category: {
                    connect: { id: categoryId }
                }
            },
        })
        res.status(201).json(newType);
  }  catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};