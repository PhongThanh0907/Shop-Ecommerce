import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  getAllProductByType,
  getAllProductDecrease,
  getAllProductIncrease,
  getProduct,
  getProducts,
  updatedProduct,
} from "../controllers/Product.js";
const router = express.Router();

//Create
router.post("/", createProduct);

//Update
router.put("/:id", updatedProduct);

//Delete
router.delete("/:id", deleteProduct);

//Get
router.get("/", getAllProduct);
router.get("/getByBrand", getAllProductByType);
router.get("/increase", getAllProductIncrease);
router.get("/decrease", getAllProductDecrease);
router.get("/:id", getProduct);
router.get("/find", getProducts);
//Get All

//Get By Type

export default router;
