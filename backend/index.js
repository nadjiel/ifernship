import dotenv from "dotenv";
import express from "express";
import internshipRouter from "./routes/internshipRouter.js";
import enterpriseRouter from "./routes/enterpriseRouter.js";
dotenv.config();

const PORT = process.env.API_PORT || 8080;

const app = express();
app.use(express.json());

app.use("/internship", internshipRouter);
app.use("/enterprise", enterpriseRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
