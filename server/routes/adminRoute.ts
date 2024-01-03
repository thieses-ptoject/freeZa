import * as adminController from "../controllers/adminController"

const route = require("express").Router();
route.post('/add',adminController.addAdmin)


export default route;