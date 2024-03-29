import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const GetFavorite = async(req:Request,res:Response): Promise<void>=>{
    const userId = req.params.userId;
    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                Favourite: {
                    include: {
                        item: true,
                    },
                },
            },
        });

        if (!user) {
            res.status(230).json([]);
            return;
        }

        res.status(200).json(user.Favourite);    
} catch (error) {
    console.error('Error retrieving favorites for user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
} 
}

export const AddFavorite =async(req:Request,res:Response): Promise<void>=>{
    const  userId = req.params.userId;
    const itemId = parseInt(req.params.itemId)

    try {
        const user = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!user) {
            res.status(404).json([]);
            return;
        }

        const ItemAdd = await prisma.item.findUnique({
            where: { id: itemId },
        });

        if (!ItemAdd) {
            res.status(404).send([]);
            return;
        }

        await prisma.favourite.create({
            data: {
                userId: userId,
                itemId: itemId,
            },
        });

        res.status(201).send(ItemAdd);
    } catch (error) {
        console.error('Error adding product to favorites:', error);
        res.status(500).send({ success: false, message: 'Internal server error' });
    }
}; 
export const DeleteFavorite = async(req:Request,res:Response): Promise<void>=>{
    const userId= req.params.userId;
    const itemId = parseInt(req.params.itemId)


    try {
    //     const user = await prisma.user.findUnique({
    //         where:{id:userId},
    //     });

    //     if (!user) {
    //         res.status(404).json({ success: false, message: 'User not found' });
    //         return;
    //     }

    //     const itemToDelete = await prisma.favourite.findUnique({
    //         where:{id:itemId},
    //     });

    //     if (!itemToDelete) {
    //         res.status(404).json({ success: false, message: 'Itemg not found' });
    //         return;
    //     }

        await prisma.favourite.deleteMany({
            where: {
                userId: userId,
                itemId: itemId, 
            },
        });
        res.status(200).json({ success: true, message: 'Product removed from favorites successfully' });
     } 
     catch (error) {
        console.error('Error deleting product from favorites:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};







export const addRemoveFav = async(req:Request,res:Response)=>{
    const {itemId }=req.body
    const {userId }=req.body
    
    try{
    if(typeof itemId==='number' && typeof userId==='number'){res.status(500).send('give a valid ')}
    else{
        const existingfCount = await prisma.favourite.count({
            where: { itemId,
                userId  },
          });
          if(existingfCount>0){
            const RemovFav =await prisma.favourite.deleteMany({
                where: { itemId, userId  },
              });
              res.status(200).send(false)
          }

          else{
        const following= await prisma.favourite.create({data:{ itemId, userId  }})
    res.status(200).send(true)}}
    }catch(err){
        res.status(500).send(err)
    }  
}


export const checkFav= async (req:Request,res:Response)=>{
    const {itemId, userId}=req.params
    let id=+itemId
    try {
        const favv  = await prisma.favourite.findMany({
            where: { itemId:id, userId },
            include: {
                user:true,
            
              },
          });
       res.status(200).send(favv)
    }
  catch(err){
     res.status(500).send(err)
  }
}