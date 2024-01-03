import * as typeRouter from "../controllers/typeController"

const route = require("express").Router(); 
 
route.post("/:categoryId",typeRouter.Addtype)

export default route;