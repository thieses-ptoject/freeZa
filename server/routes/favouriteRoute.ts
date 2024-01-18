import * as favouriteRouter from "../controllers/favouriteItemController"

const route = require("express").Router();
route.get("/:userId",favouriteRouter.GetFavorite)
route.get("/:userId/:itemId",favouriteRouter.checkFav)
route.post("/add/:userId/:itemId",favouriteRouter.AddFavorite)
route.post("/addRemov",favouriteRouter. addRemoveFav)
route.delete("/delete/:userId/:itemId",favouriteRouter.DeleteFavorite)

export default route;