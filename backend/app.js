import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { connection } from "./database/connection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./router/userRoutes.js";
import bidRouter from "./router/bidRoutes.js";
import auctionItemRouter from "./router/auctionItemRoutes.js";
import commissionRouter from "./router/commissionRouter.js"
import superAdminRouter from "./router/superAdminRoutes.js"
import {endedAuctionCron} from "./automation/endedAuctionCron.js";
import {verifyCommissionCron} from "./automation/verifyCommissionCron.js";



config({ path: "./config/config.env" });

const app = express();

app.use(cors ({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: "/tmp/"
}));
app.use(errorMiddleware);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/auctionitem', auctionItemRouter);
app.use('/api/v1/bid', bidRouter);
app.use('/api/v1/commission',commissionRouter)
app.use('/api/v1/superadmin',superAdminRouter)

endedAuctionCron();
verifyCommissionCron();
connection();

export default app;