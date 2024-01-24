import * as notificationRouter  from "../controllers/notificationRateController"

const route = require("express").Router();

route.get('/:reciever',notificationRouter.getnotifications)
route.post('/add',notificationRouter.addnotification)
route.delete('/:reciever/:senderId',notificationRouter.updateNotifications)



export default route;

