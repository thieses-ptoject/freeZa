import * as typeRouter from "../controllers/typeController"

const route = require("express").Router(); 
 
route.post("/:categoryId",typeRouter.Addtype)
route.get("/:categoryId",typeRouter.GetTypesBycategory)
route.delete("/:categoryId/:typeId",typeRouter.DeleteType)

export default route;