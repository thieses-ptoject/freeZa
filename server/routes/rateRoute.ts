import * as rateRouter from "../controllers/rateController"

const route = require("express").Router();
route.post('/:raterId',rateRouter.rateUser)

export default route;