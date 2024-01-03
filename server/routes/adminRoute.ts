import * as adminController from "../controllers/adminController"

const route = require("express").Router();
route.post('/add',adminController.addAdmin)
route.get('/',adminController.getAdmin)


export default route;