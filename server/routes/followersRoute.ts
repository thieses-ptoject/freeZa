import * as followersRouter from "../controllers/followersController"

const route = require("express").Router();
route.post("/add",followersRouter.follow)
route.get("/follower/:followerId",followersRouter.getUserFollow)
route.get("/followed/:followedId",followersRouter.getUserFollowME)
route.get("/:followerId/:followedId",followersRouter.getfollow)
route.delete("/del/:Id",followersRouter.deletef)
export default route;