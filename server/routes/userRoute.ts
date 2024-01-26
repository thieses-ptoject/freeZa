import { getUserId,addUser, getUser, addFreeza, updateUser, deleteUser,GetAllUsers, BlockUser,UpdateAcc,deblockUser,signin} from "../controllers/userController";
import { Router } from "express";

const router = Router();

router.post("/addUser", addUser);
router.get("/:email", getUser)
router.get("/getuser/:id",getUserId)
router.put("/addFreeza/:id", addFreeza)
router.put("/updateUser/:email", updateUser)
router.delete("/deleteUser/:id", deleteUser)
router.get("/",GetAllUsers)
router.put("/block/:id",BlockUser) 
router.put("/deblock/:id",deblockUser)
router.put("/premium/:id",UpdateAcc)
router.post("/signin",signin)


export default router;