import { Request, Response, query } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface Appointments {
  id: number;
  time: string;
  status: boolean;
  giverId: string;
  reciverId: string;
  itemId: number;
}

export const addAppointment = async (req: Request, res: Response) => {
  try {

    const query = await prisma.appointments.create({
      data: req.body,
    });

    res.send(query);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  } finally {
    await prisma.$disconnect();
  }
};
export const done = async (req: Request, res: Response)=>{
    try{
        const query = await prisma.appointments.update({
            where:{
                id: req.body.id,
            },
            data :{
                status: true
            }
        })
        res.send(query)
    }catch(error){
        res.send(error)
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