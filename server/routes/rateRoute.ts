import * as rateRouter from "../controllers/rateController"

const route = require("express").Router();
route.post('/:raterId',rateRouter.rateUser)
route.get('/getraters/:ratedId',rateRouter.getRaters)

export default route;