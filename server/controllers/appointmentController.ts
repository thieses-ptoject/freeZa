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
        ItemId:ItemId,
        location : location
      },
    });

    res.send(query);
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