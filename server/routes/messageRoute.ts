import * as messageRouter  from "../controllers/messagesController"

const route = require("express").Router();

route.get('/:userId/:senderId',messageRouter.getONeDisc)
route.post('/add',messageRouter.createChat)
route.get('/:userId',messageRouter.getDiscutions)
export default route;