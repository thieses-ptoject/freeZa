import * as commentRouter from "../controllers/commentController"

const route = require("express").Router();

route.post("/addcomment/:userId", commentRouter.addNewComment)
route.get("/getall/:postId", commentRouter.getallcommentOfonePost)
route.put("/update/:userId", commentRouter.updateComment)
route.delete("/delete/:id/:userId", commentRouter.deleteoneComment)
route.delete("/deleteall/:userId", commentRouter.deleteAllCommentS)


export default route;   