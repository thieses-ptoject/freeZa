import * as itemRouter from "../controllers/itemController"

const route = require("express").Router();
route.get("/",itemRouter.GetAllItems)
route.get("/getitem/:ownerId",itemRouter.GetAllItemsOfOneUser)
route.get("/getitems/:ownerId",itemRouter.GetAllItemsOfOneUsers)
route.post("/add/:ownerId",itemRouter.AddItem)
route.get("/type/:typeId",itemRouter.getItemByTypes)
route.get("/state/:state",itemRouter.GetItembyState)
route.get("/onetype/:type",itemRouter.GetItembyT)
route.get("/freeza/:strawberries",itemRouter.GetItemByFreza)
route.get("/category/:categoryId",itemRouter.GetItemsByCategory)
route.get("/one/:id",itemRouter.GetOne)
route.delete("/:ItemId",itemRouter.DeleteItem)
route.put("/updateS/:id",itemRouter.UpdateState)
route.put("/updateF/:id",itemRouter.UpdateFreeza)
route.put("/updateD/:id",itemRouter.UpdateDescription)
route.put("/updateN/:id",itemRouter.UpdateName)
route.put("/updateL/:id",itemRouter.UpdateLocation)

export default route;