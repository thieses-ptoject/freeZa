import * as categoryRouter from "../controllers/categoryController"

const route = require("express").Router();
route.get("/",categoryRouter.GetAllcategories)
route.post("/add",categoryRouter.AddCategory)
route.delete("/remove/:categoryId",categoryRouter.DeleteCategory)

export default route;