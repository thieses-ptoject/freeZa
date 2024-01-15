import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

// AddItem
export const AddItem = async(req:Request,res:Response): Promise<void>=>{
const ownerId= req.params.ownerId
try {
    const owner = await prisma.user.findUnique({
        where:{ id:ownerId}
    }) 
    if(!owner){
        res.status(404).send({error:"owner not found"})
        return;
    } 
    const{name,description,image,type,location,state,typeId,strawberries,exclusive}=req.body 
    const NewItem=await prisma.item.create({
          data:{
              name: name,
              description: description,
              image:image,
              type:type,
              location:location,
              state:state,
              strawberries:strawberries,
              ownerId:ownerId,
              typeId:typeId,
              exclusive: exclusive === "true"? true: false, 
              
          }
    }) 
    res.status(200).send(NewItem)
    
} catch (error) {
  console.log(error)
    res.status(500).send(error)  
}
}  
//Delete Item
export const DeleteItem = async(req:Request,res:Response): Promise<void>=>{
  const ItemId=parseInt(req.params.ItemId)
    try {
        const ItemTodelete= await prisma.item.findUnique({
            where:{id:ItemId}
        }) 
        if(!ItemTodelete){
            res.status(404).send({error:"Already inavailable"})
            return;
        } 
        await prisma.item.deleteMany({
            where:{id:ItemId}
        }) 
        res.status(200).send({success: true, message: 'Item removed successfully',category:ItemTodelete})
        
    } catch (error) {
        res.status(500).send(error)  
    }
}




//Getting Items: 

export const GetAllItems = async(req:Request,res:Response): Promise<void>=>{
    try {
        const All = await prisma.item.findMany();
    
        if (All.length > 0) {
          res.status(200).json(All);
        } else {
          res.status(200).json([]);
        }
      } catch (error) {
        res.status(500).json(error);
      }
    };

    export const GetAllItemsOfOneUser = async(req:Request,res:Response): Promise<void>=>{
      const {ownerId} = req.params
      try {
          const All = await prisma.item.findMany(
            {
              where: {
                ownerId:ownerId
              }
            }
          );
          if (All.length > 0) {
            res.status(200).json(All);
          } else {
            res.status(200).json([]);
          }
        } catch (error) {
          res.status(500).json(error);
        }
      };

    export const getItemByTypes= async (req:Request,res:Response): Promise<void>=>{
      const typeId=parseInt(req.params.typeId)
      try {
        const SameType= await prisma.types.findMany({
          where:{id:typeId},
          include:{
            Item:true
          }
        }) 
        if(!SameType){
          res.status(404).send([])
          return;
        }
        res.status(200).send(SameType[0].Item)
        
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
      }
    } 
    export const GetItembyState = async(req:Request,res:Response): Promise<void>=>{
      const state= req.params.state 
      try {
        const SameState=await prisma.item.findMany({
          where:{state:state}
        }) 
        if(!SameState){
          res.status(404).send([])
          return;
        } 
        res.status(200).send(SameState)

        
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
      }
    } 
    export const GetItembyT = async(req:Request,res:Response):Promise<void>=>{
      const type = req.params.type 
      try {
        const SameTypes=await prisma.item.findMany({
          where:{type:type}
        }) 
        if(!SameTypes){
          res.status(404).send([])
          return;
        } 
        res.status(200).send(SameTypes)

        
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
      }

    }
export const GetItemByFreza= async (req:Request,res:Response):Promise<void>=>{
const strawberries = parseInt(req.params.strawberries) 
      try {
        const SameFreeza=await prisma.item.findMany({
          where:{strawberries:strawberries}
        }) 
        if(!SameFreeza){
          res.status(404).send([])
          return;
        } 
        res.status(200).send(SameFreeza)

        
      } catch (error) {
        console.log(error)
        res.status(500).send(error)
        
      }

    } 
    export const GetItemsByCategory = async (req: Request, res: Response): Promise<void> => {
      const categoryId = parseInt(req.params.categoryId);
      console.log(categoryId)
  
      try {
          const category = await prisma.category.findUnique({
              where: { id: categoryId }
          });
  
          if (!category) {
              res.status(404).send([]);
              return;
          }
  
          const itemsInCategory = await prisma.item.findMany({
              where: {
                  types: {
                      AND: {
                          categoryId: categoryId
                      }
                  }
              }
          });
       res.status(200).send(itemsInCategory);
      } catch (error) {
          console.error(error);
          res.status(500).send({ error: 'Internal server error' });
      } 
  }; 
  //Update Items : 
  export const UpdateState= async (req: Request, res: Response): Promise<void> => {
    const {state}= req.body
    const id= parseInt(req.params.id)
    try {
       const ItemUpdated = await prisma.item.update({
        where:{id:id},
        data:{
          state:state
        }
       }) 
       res.status(200).send({success: true, message: 'Item Updated successfully', item:ItemUpdated})

    } catch (error) {
      console.log(error)
      res.status(500).send(error) 
    }
  }
  export const UpdateFreeza= async (req: Request, res: Response): Promise<void> => {
    const {strawberries}= req.body
    const id= parseInt(req.params.id)
    try {
       const ItemUpdated = await prisma.item.update({
        where:{id:id},
        data:{
          strawberries:strawberries
        }
       }) 
       res.status(200).send({success: true, message: 'Item Updated successfully', item:ItemUpdated})

    } catch (error) {
      console.log(error)
      res.status(500).send(error) 
    }
  } 
  export const UpdateDescription= async (req: Request, res: Response): Promise<void> => {
    const {description}= req.body
    const id= parseInt(req.params.id)
    try {
       const ItemUpdated = await prisma.item.update({
        where:{id:id},
        data:{
          description:description
        }
       }) 
       res.status(200).send({success: true, message: 'Item Updated successfully', item:ItemUpdated})

    } catch (error) {
      console.log(error)
      res.status(500).send(error) 
    }
  } 

  export const UpdateName= async (req: Request, res: Response): Promise<void> => {
    const {name}= req.body
    const id= parseInt(req.params.id)
    try {
       const ItemUpdated = await prisma.item.update({
        where:{id:id},
        data:{
          name:name
        }
       }) 
       res.status(200).send({success: true, message: 'Item Updated successfully', item:ItemUpdated})

    } catch (error) {
      console.log(error)
      res.status(500).send(error) 
    }
  } 

  export const UpdateLocation= async (req: Request, res: Response): Promise<void> => {
    const {location}= req.body
    const id= parseInt(req.params.id)
    try {
       const ItemUpdated = await prisma.item.update({
        where:{id:id},
        data:{
          location:location
        }
       }) 
       res.status(200).send({success: true, message: 'Item Updated successfully', item:ItemUpdated})

    } catch (error) {
      console.log(error)
      res.status(500).send(error) 
    }
  }
  