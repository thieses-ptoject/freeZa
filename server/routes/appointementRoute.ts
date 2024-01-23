import { done , deleteAppo ,getapprgivernotdone,getapprrecivernotdone, addAppointment, getapprecidone,getappnotdone,getapprgiverdone } from "../controllers/appointmentController";
import { Router } from "express";

const router = Router();

router.post("/", addAppointment)
router.put("/", done)
router.delete("/:id", deleteAppo)
router.get('/apprecnotdone/:id',getapprrecivernotdone)
router.get('/appgivdone/:id',getapprgiverdone)
router.get('/apprecdone/:id',getapprecidone)
router.get('/appgivnotdone/:id',getapprgivernotdone)
export default router;