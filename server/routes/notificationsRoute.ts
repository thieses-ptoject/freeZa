import * as messageRouter  from "../controllers/notificationsController"

const route = require("express").Router();

route.get('/:reciever',messageRouter.getnotifications)
route.post('/add',messageRouter.addnotification)
route.delete('/:reciever/:senderId',messageRouter.updateNotifications)



export default route;

