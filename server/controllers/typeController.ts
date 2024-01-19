import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const Addtype = async (req: Request, res: Response): Promise<void> => {
  const categoryId = parseInt(req.params.categoryId);
  try {
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      res.status(404).send({ error: "Category not found" });
      return;
    }
    const { type } = req.body;
    const newType = await prisma.types.create({
      data: {
        type: type,
        category: {
          connect: { id: categoryId },
        },
      },
    });
    res.status(201).json(newType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}; 
export const GetTypesBycategory = async(req:Request,res:Response): Promise<void> =>{
    const categoryId= parseInt(req.params.categoryId) 
    try {
        const alltypes= await prisma.category.findMany({
            where:{id:categoryId},
            include:{
                Types:true
            }
        }) 
        if(!alltypes){
            res.status(404).send([])
            return;
        } 
        res.status(200).json(alltypes[0].Types)

        
    } catch (error) {
        res.status(500).send(error)
        
    }

} 

export const DeleteType = async(req:Request,res:Response): Promise<void>=>{
    const categoryId =parseInt(req.params.categoryId)
    const typeId = parseInt(req.params.typeId) 
    try {
        const category = await prisma.category.findUnique({
            where:{id:categoryId}
        }) 
        if (!category) {
            res.status(404).send({ error:'Invalid category' });
            return;
        } 
        const TypetoDelete= await prisma.types.findUnique({
            where:{id:typeId}
        }) 
        if(!TypetoDelete){
            res.status(404).send({error:"Already doesn't exist"})
            return;
        } 
        await prisma.types.deleteMany({
            where:{categoryId:categoryId,
                    id:typeId}
        })
        res.status(200).send({ success: true, message: 'Type removed successfully', type: TypetoDelete })


    } catch (error) {
     res.status(500).send(error)   
    }
}
export const GetAllTypes = async(req:Request,res:Response)=>{
  try {
    const Types= await prisma.types.findMany()
    if(Types){
      res.status(200).send(Types)
    } else {
      res.status(200).send([])
    }
  } catch (error) {
    res.status(500).json(error)
    
  }
}