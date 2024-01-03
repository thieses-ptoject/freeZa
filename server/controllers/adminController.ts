import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const addAdmin = async (req: Request, res: Response) => {
    const { id, name, image, email } = req.body
    try {
        if (id === '') { return res.status(400).send('please give a valide id ') }
        else if(name===''||image===''||email===''){return  res.status(400).send('please give a valide fields')}
        else {
            const admin = await prisma.admin.create({
                data: {
                    id, name, image, email
                },
            });
            res.status(200).send(admin)
        }
    }
    catch (err) {
        res.status(500).send

    }

}
export const getAdmin = async (req: Request, res: Response) => {
    const { id } = req.params
    try { if(id===''|| typeof id==="number"){res.status(500).send("give a valide id")}
    else {
     const  admin  =prisma.admin.findUnique({
     where: {
      id:id 
    },
  })
  }}
    catch (err) { 
        res.status(500).send(err)
    }


}