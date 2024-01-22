import { done , deleteAppo , addAppointment, getAppreciv,getappgiv } from "../controllers/appointmentController";
import { Router } from "express";

const router = Router();

router.post("/", addAppointment)
router.put("/", done)
router.delete("/:id", deleteAppo)
router.get('/apprec/:id',getAppreciv)
router.get('/appgiv/:id',getappgiv)
export default router;