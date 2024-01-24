import { OneDisc,newChat,getDiscussions } from "../controllers/claimsController";
import { Router} from "express";

const router=Router()
router.get("/:adminId/:userId",OneDisc)
router.post("/new/:adminId/:userId",newChat)
router.get("/:adminId", getDiscussions)

export default router
