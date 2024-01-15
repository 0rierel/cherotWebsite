import express, { Request, Response } from "express";
import { getAllProducts } from "./services/productsService";
import mongoose, { ConnectOptions, Document, Schema } from "mongoose";
import productRouter from "./routers/prouductsRouter";

mongoose.connect(process.env.MONGODB_API_URL || "mongodb://localhost:27017/webstoreDev");

const app = express();
const port =  process.env.PORT || 5000;

app.use("/products", productRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
