import * as notificationRouter  from "../controllers/notificationRateController"

const route = require("express").Router();

route.get('/:reciever',notificationRouter.getnotifications)
route.post('/add',notificationRouter.addnotification)
route.put('/:reciever',notificationRouter.updateNotifications)
route.delete('/:id',notificationRouter.deleteNotifications)

export default route;

