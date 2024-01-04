import * as postRouter from "../controllers/postController"

const route = require("express").Router();

route.post("/addpost/:userId", postRouter.addNewPost)
route.get("/getall", postRouter.getallPost)
route.get("/get/:userId", postRouter.getAllPostofOneUser)
route.put("/update/:postId/:userId", postRouter.updatePost)
route.delete("/delete/:postId/:userId", postRouter.deletePost)
export default route;