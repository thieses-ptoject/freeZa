import { done , deleteAppo } from "../controllers/appointmentController";
import { Router } from "express";

const router = Router();


router.put("/", done)
router.delete("/:id", deleteAppo)
export default router;