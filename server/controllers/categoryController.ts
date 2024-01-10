import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const GetAllcategories = async(req:Request,res:Response): Promise<void>=>{
    try {
        const Categories = await prisma.category.findMany({
            include: {
               Types:true,
              },
        })
        res.status(200).send(Categories)
        
    } catch (error) {
        res.status(500).send(error)
    }
    
} 
export const AddCategory = async(req:Request,res:Response): Promise<void>=>{
    const {name,image}= req.body
    try {
        const NewCategory = await prisma.category.create({
            data:{
                name:name,
                image:image
            }
        }) 
        res.status(200).send(NewCategory)
    } catch (error) { 
        res.status(500).send(error)
        
    }
} 
export const DeleteCategory = async(req:Request,res:Response): Promise<void>=>{
    const categoryId=parseInt(req.params.categoryId)
    try {
        const CategoryTodelete= await prisma.category.findUnique({
            where:{id:categoryId}
        }) 
        if(!CategoryTodelete){
            res.status(404).send({error:"Already inavailable"})
            return;
        } 
        await prisma.category.deleteMany({
            where:{id:categoryId}
        }) 
        res.status(200).send({success: true, message: 'Category removed successfully',category:CategoryTodelete})
        
    } catch (error) {
        res.status(500).send(error)
        
    }
}