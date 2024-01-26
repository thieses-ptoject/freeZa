import * as likeRouter from "../controllers/likeController"

const route = require("express").Router();
route.post("/:userId",likeRouter.addLike)
route.get("/postlikes/:id/:postId",likeRouter.getPostLikes)
route.get("/postalllikes/:postId",likeRouter.getallPostLikes)

export default route;