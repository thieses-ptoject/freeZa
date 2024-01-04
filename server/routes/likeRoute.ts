import * as likeRouter from "../controllers/likeController"

const route = require("express").Router();
route.post("/:userId",likeRouter.addLike)
route.get("/postlikes",likeRouter.getPostLikes)


export default route;