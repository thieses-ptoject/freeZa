import * as likeRouter from "../controllers/likeController"

const route = require("express").Router();
route.post("/:userId",likeRouter.addLike)
route.get("/postlikes/:id/:postId",likeRouter.getPostLikes)


export default route;