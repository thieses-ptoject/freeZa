import { Request, Response, query } from "express";
import { PrismaClient } from "@prisma/client";

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
    const { time, giverId, reciverId, ItemId, location }: Appointments =
      req.body;

    const query = await prisma.appointments.create({
      data: {
        time: time,
        status: false,
        giverId: giverId,
        reciverId: reciverId,
        ItemId: +ItemId,
        location: location,
      },
    });

    const markItemDone = await prisma.item.update({
      where: {
        id: +ItemId,
      },
      data: {
        state: "reserved",
      },
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
    const ItemId = + req.body.ItemId;
    const appointmentId: number = parseInt(req.body.appointmentId);
    const reciverId: string = req.body.reciverId;
    const giverId: string = req.body.giverId;

    const markItemDone = await prisma.item.update({
      where: {
        id: ItemId,
      },
      data: {
        state: "taken",
      },
    });
    const query = await prisma.appointments.update({
      where: {
        id: appointmentId,
      },
      data: {
        status: true,
      },
    });
    const product = await prisma.item.findUnique({
      where: { id: ItemId },
    });
    console.log(product)
    if (product !== null) {
      const usergiver = await prisma.user.updateMany({
        where: { id: giverId },
        data: {
          strawberries: {
            increment: product.strawberries,
          },
          nbrOfDonation: { increment: 1 },
        },
      });
    }
    const updatGiver= await prisma.user.findMany({
    where:{
      id: giverId
}
    })
if( updatGiver[0]?.nbrOfDonation !== undefined){
  if(updatGiver[0]?.nbrOfDonation >=20 && updatGiver[0]?.nbrOfDonation <50 ){
    const usergiver = await prisma.user.update({
      where: { id: giverId },
      data: {
        level: "Junior Giver"
      },
    });
  }
 else if(updatGiver[0]?.nbrOfDonation >=50 && updatGiver[0]?.nbrOfDonation <100 ){
    const usergiver = await prisma.user.update({
      where: { id: giverId },
      data: {
        level: "Sinior Giver"
      },
    });
  }
  else if(updatGiver[0]?.nbrOfDonation >=100 ){
    const usergiver = await prisma.user.update({
      where: { id: giverId },
      data: {
        level: "Super Giver"
      },
    });
  }
}
  
    if (product !== null) {
      const usergiver = await prisma.user.update({
        where: { id: reciverId },
        data: {
          strawberries: {
            decrement: product.strawberries,
          },
          nbrOfTakes: { increment: 1 },
        },
      });
    }
    res.send(query);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
};



export const deleteAppo = async (req: Request, res: Response)=>{
  const {ItemId,id}=req.params
    try{
        const query = await prisma.appointments.delete({
            where: {
                id: parseInt(req.params.id),
              },
        })
       const item=await prisma.item.update({
        where: {
        id: +ItemId,
         },
data: {
    state: "available"
}
 })
        res.send(query)
    }catch(error){
        res.send(error)
        console.log(error)
    }
}

export const getapprecidone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const give = await prisma.appointments.findMany({
      where: {
        reciverId: id,
        status: true,
      },
      include: {
        giver: true,
        Item: true,
      },
    });
    res.status(200).send(give);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const getapprgiverdone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recive = await prisma.appointments.findMany({
      where: {
        giverId: id,
        status: true,
      },
      include: {
        reciver: true,
        Item: true,
      },
    });
    res.status(200).send(recive);
  } catch (err) {}
};
export const getapprgivernotdone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recive = await prisma.appointments.findMany({
      where: {
        giverId: id,
        status: false,
      },
      include: {
        reciver: true,
        Item: true,
      },
    });
    res.status(200).send(recive);
  } catch (err) {}
};

export const getapprrecivernotdone = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const recive = await prisma.appointments.findMany({
      where: {
        reciverId: id,
        status: false,
      },
      include: {
        giver: true,
        Item: true,
      },
    });
    res.status(200).send(recive);
  } catch (err) {}
};
