import express, { Request, Response } from "express";
import { getAllProducts } from "./services/productsService";
import mongoose, { ConnectOptions, Document, Schema } from "mongoose";
import productRouter from "./routers/prouductsRouter";
import dotenv from "dotenv";

mongoose.connect(
  process.env.MONGODB_API_URL || "mongodb://localhost:27017/webstoreDev"
);

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "development") {
  const cors = require("cors");
  app.use(cors());
  console.log("using cors");
}
app.use(express.json());

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
