import { OneDisc,getDiscussions,UnreadClaims,newChat} from "../controllers/claimsController";
import { Router} from "express";

const router=Router()
router.put("/:adminId/:userId",OneDisc)
router.get("/:adminId/:userId",UnreadClaims)
router.get("/:adminId", getDiscussions)
router.post("/new/:adminId/:userId", newChat)

export default router
