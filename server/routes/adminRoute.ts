import * as adminController from "../controllers/adminController"

const route = require("express").Router()
route.post('/add',adminController.addAdmin)
route.get('/:id',adminController.getAdmin)
route.put('/:id',adminController.updateAdmin)
route.delete('/:id',adminController.deleteAdmin)

export default route;