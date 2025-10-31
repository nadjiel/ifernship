import "express-async-errors";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connect from "./database/index.js";
import internshipRouter from "./routes/internshipRouter.js";
import enterpriseRouter from "./routes/enterpriseRouter.js";
import userRouter from "./routes/userRouter.js";
import error from "./middlewares/error.js";
dotenv.config();

const PORT = process.env.API_PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());
app.use(error);

app.use("/internship", internshipRouter);
app.use("/enterprise", enterpriseRouter);
app.use("/user", userRouter);

async function start() {
  try {
    await connect();

    console.log("Successfully connected to DB");
    console.log(`App listening on port ${PORT}`);
  } catch (err) {
    console.log(`Not connected to DB. Error: ${err}`);
  }
}

app.listen(PORT, start);
