import { done , deleteAppo ,getapprgivernotdone, addAppointment, getapprecidone,getappnotdone,getapprgiverdone } from "../controllers/appointmentController";
import { Router } from "express";

const router = Router();

router.post("/", addAppointment)
router.put("/", done)
router.delete("/:id", deleteAppo)
router.get('/apprecnotdone/:id',getapprgivernotdone)
router.get('/appgivdone/:id',getapprgiverdone)
router.get('/apprecdone/:id',getapprecidone)
router.get('/appgivnotdone/:id',getapprgivernotdone)
export default router;