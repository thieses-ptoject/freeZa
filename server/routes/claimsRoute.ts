import { OneDisc,getDiscussions,UnreadClaims} from "../controllers/claimsController";
import { Router} from "express";

const router=Router()
router.put("/:adminId/:userId",OneDisc)
router.get("/:adminId/:userId",UnreadClaims)
router.get("/:adminId", getDiscussions)

export default router
