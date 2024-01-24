import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const addAdmin = async (req: Request, res: Response) => {
    const { id, name, image, email } = req.body
    try {
        if (id === '') { return res.status(400).send('please give a valide id ') }
        else if (name === '' || image === '' || email === '') { return res.status(400).send('please give a valide fields') }
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
    try {
        if (id === '' || typeof id === "number") { res.status(500).send("give a valide id") }
        else {
            const admin = await prisma.admin.findUnique({
                where: {
                    id: id
                },
            })
            res.status(200).send(admin)
        }
    }
    catch (err) {
        res.status(500).send(err)
    }


}
export const updateAdmin = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, image, email } = req.body
        if (id === '') { return res.status(400).send('please give a valide id ') }
        else if (name === '' || image === '' || email === '') { return res.status(400).send('please give a valide fields') }
        else{
            const user=await prisma.admin.updateMany({
                where: {
                  id: id
                },
                data: {
                    name:name, 
                    image:image,
                    email:email 
                },
              })
              res.status(200).send(user)
        }
        
    }
    catch (err) {
        res.status(500).send(err)

    }
}
export const deleteAdmin=async(req:Request,res:Response)=>
{const {id}=req.params
try{
if (id === '') { return res.status(400).send('please give a valide id ') }
else {
    const deleteAdmin = await prisma.admin.delete({
        where: {
          id: id,
        },
      })
      res.status(200).send(deleteAdmin)

}}catch(err){
    res.status(500).send(err)
}


} 
