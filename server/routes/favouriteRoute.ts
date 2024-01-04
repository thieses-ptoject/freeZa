import * as favouriteRouter from "../controllers/favouriteItemController"

const route = require("express").Router();
route.get("/:userId",favouriteRouter.GetFavorite)
route.post("/add/:userId/:itemId",favouriteRouter.AddFavorite)
route.delete("/delete/:userId/:itemId",favouriteRouter.DeleteFavorite)

export default route;