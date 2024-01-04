import * as followersRouter from "../controllers/followersController"

const route = require("express").Router();
route.post("/add",followersRouter.follow)
route.get("/follower/:followerId",followersRouter.getUserFollow)
route.get("/followed/:followedId",followersRouter.getUserFollowing)
route.delete("/:followerId",followersRouter.deletef)
export default route;