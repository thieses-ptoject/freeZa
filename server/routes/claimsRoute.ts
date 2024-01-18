import { OneDisc,newChat } from "../controllers/claimsController";
import { Router} from "express";

const router=Router()
router.get("/:adminId/:userId",OneDisc)
router.post("/new/:adminId/:userId",newChat)

export default router 