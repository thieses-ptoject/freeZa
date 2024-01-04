import { addUser ,getUser} from "../controllers/userController";
import { Router } from "express";

const router = Router();

router.post("/", addUser);
router.get("/:email", getUser)

export default router;