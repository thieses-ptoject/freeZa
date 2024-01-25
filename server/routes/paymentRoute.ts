const route = require("express").Router();
import {Intent} from '../controllers/paymentController'

route.post("/intent",Intent)

export default route 