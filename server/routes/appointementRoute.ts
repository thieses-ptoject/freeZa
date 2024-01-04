import { done , deleteAppo , addAppointment } from "../controllers/appointmentController";
import { Router } from "express";

const router = Router();

router.post("/", addAppointment)
router.put("/", done)
router.delete("/:id", deleteAppo)
export default router;