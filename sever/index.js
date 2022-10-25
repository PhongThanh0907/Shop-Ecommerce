import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import productsRoute from "./routes/Product.js";
import brandsRoute from "./routes/Brand.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connect to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.use(cors());

app.use(cookieParser());

app.use(express.json());

app.use("/api/products", productsRoute);
app.use("/api/brands", brandsRoute);

app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connect to backend!");
});
