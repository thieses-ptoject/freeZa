import express, { Application, Request, Response } from "express";
import cors from "cors";
import adminRouter from "./routes/adminRoute"
import appointmentRouter from "./routes/appointementRoute"
import categoryRouter from "./routes/categoryRoute"
import commentRouter from "./routes/commentRoute"
import favouriteRouter from "./routes/favouriteRoute"
import followersRouter from "./routes/followersRoute"
import itemRouter from "./routes/itemRoute"
import likeRouter from "./routes/likeRoute"
import postRouter from "./routes/postRoute"
import rateRouter from "./routes/rateRoute"
import statisticsRouter from "./routes/statisticsRoute"
import typeRouter from "./routes/typeRoute"
import userRouter from "./routes/userRoute"
import messageRouter from "./routes/messageRoute"
import claimsRouter from "./routes/claimsRoute"
import notificationsRouter from "./routes/notificationsRoute"
import paymentRouter from "./routes/paymentRoute"
import notificationsRateRouter from "./routes/notificationsRateRoute"

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
//like
app.use("/like", likeRouter)
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
//messege
app.use('/message',messageRouter) 
//CLAIM TO the admin 
app.use('/claims',claimsRouter)
//notifications 
app.use('/notifications',notificationsRouter)
// Payment Stripe 
app.use("/payments",paymentRouter)

//notificationsRate
app.use('/notificationsRate',notificationsRateRouter)

app.listen(3001, () => {
    console.log("listening on http://localhost:3001");
  });

