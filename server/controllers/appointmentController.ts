import { Request, Response, query } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Appointments {
  time: string;
  status: boolean;
  giverId: string;
  reciverId: string;
  ItemId: number;
  location: string;
}

export const addAppointment = async (req: Request, res: Response) => {
  try {
    const { time, giverId, reciverId, ItemId, location }: Appointments = req.body;

    const query = await prisma.appointments.create({
      data: {
        time: time,
        status: false,
        giverId: giverId,
        reciverId: reciverId,
        ItemId:+ItemId,
        location : location
      },
    });

      const markItemDone = await prisma.item.update({
      where: {
          id: +ItemId,
      },
      data: {
          state: "reserved"
      }
  });


    res.status(200).send(query);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  } finally {
    await prisma.$disconnect();
  }
};

  export const done = async (req: Request, res: Response) => {
    try {
        const itemId: number = parseInt(req.body.itemId);
        const appointmentId: number = parseInt(req.body.id);
        const reciverId: string = req.body.reciverId;
        const giverId:string=req.body.giverId
      
        const markItemDone = await prisma.item.update({
            where: {
                id: itemId,
            },
            data: {
                state: "taken"
            }
        });
 
        const query = await prisma.appointments.update({
            where: {
                id: appointmentId,
            },
            data: {
                status: true
            }
        });
        const product=await prisma.item.findUnique({
          where:{id:itemId}
        })
        if(product!==null){
        const usergiver=await prisma.user.update({
          where:{id:giverId},
          data:{ strawberries: {
            increment: product.strawberries
          },
          nbrOfDonation:{increment: 1}
           }

        })}
        if(product!==null){
          const usergiver=await prisma.user.update({
            where:{id:reciverId},
            data:{ strawberries: {
              decrement: product.strawberries
            },
            nbrOfTakes:{increment: 1}
             }
  
          })}
 
        res.send(query);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    } 
}
export const deleteAppo = async (req: Request, res: Response)=>{
    try{
        const query = await prisma.appointments.delete({
            where: {
                id: parseInt(req.params.id),
              },
        })
        res.send(query)
    }catch(error){
        res.send(error)
        console.log(error)
    }
}
export const getAppreciv=async (req: Request, res: Response)=>{
  try {
    const {id}=req.params
    const give=await prisma.appointments.findMany({
       where:{giverId:id,
    
     }
    })
    let arr:any[]=[]
    const giverObj=give.map(async(ele)=> {
      const otherUser=await prisma.user.findUnique({
        where:{
          id:ele.reciverId
        }   
      })
     const product=await prisma.item.findUnique({where:{id:ele.ItemId}})
    return  arr.push({reciever:otherUser,product,ele})
    })
    res.status(200).send(arr)

  }
  catch (err)
  {
    res.status(500).send(err)
  }
}
export const getappgiv=async (req: Request, res: Response)=>{
  try {
    const {id}=req.params
    const give= await prisma.appointments.findMany({
       where:{reciverId:id,
    
     }
    })
    
    let arr:any[]=[]
    const giverObj=give.map(async(ele)=> {
      const otherUser=await prisma.user.findUnique({
        where:{
          id:ele.giverId
        }   
      })
     const product=await prisma.item.findUnique({where:{id:ele.ItemId}})
    return  arr.push({giver:otherUser,product,ele})})
    res.status(200).send(arr)
  }
  catch (err)
  {
    res.status(500).send(err)
  }
}