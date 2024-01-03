import express, { Application, Request, Response } from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoute"
import appointmentRouter from "./routes/appointementRoute"
import categoryRouter from "./routes/categoryRoute"
import commentRouter from "./routes/commentRoute"
import favouriteRouter from "./routes/favouriteRoute"
import followersRouter from "./routes/followersRoute"
import itemRouter from "./routes/itemRoute"

import postRouter from "./routes/postRoute"
import rateRouter from "./routes/rateRoute"
import statisticsRouter from "./routes/statisticsRoute"
import typeRouter from "./routes/typeRoute"
import userRouter from "./routes/userRoute"

const app: Application = express();
app.use(express.json());
app.use(cors());
//adminRoute
app.use("/admin", adminRouter)
//appointement
app.use("/appointment", appointmentRouter)
//category
app.use("/category", categoryRouter)
//comment
app.use("/comment", commentRouter)
//favorite
app.use("/favorite", favouriteRouter)
//followers
app.use("/followers", followersRouter)
//item
app.use("/item", itemRouter)

//post
app.use("/post", postRouter)
//rate
app.use("/rate", rateRouter)
//statistics
app.use("/statistics", statisticsRouter)
//type
app.use("/type", typeRouter)
//user
app.use("/user", userRouter)


app.listen(3001, () => {
    console.log("listening on http://localhost:3001");
  });