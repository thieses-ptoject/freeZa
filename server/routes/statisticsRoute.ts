import * as statistics from "../controllers/statisticsController"

const route = require("express").Router();
route.get('/type/:typeId',statistics.statisticType)
route.get('/status',statistics.itemstatistic)
route.get('/appointment',statistics.appointementStatistics)
export default route;