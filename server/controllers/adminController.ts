import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();


export const addAdmin = async (req: Request, res: Response) => {
    const { id, name, image, email } = req.body
    try { 
        const admin =
    }
    catch (err) {

    }

}