import { addUser } from "../controllers/userController";
import { Router } from "express";

const router = Router();

router.post("/", addUser);

export default router;