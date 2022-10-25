import express from "express";
import { createBrand, getAllBrand, getBrand } from "../controllers/Brand.js";
const router = express.Router();

//Create
router.post("/", createBrand);

//Update

//Delete

//Get
router.get("/", getAllBrand);

router.get("/:id", getBrand);

export default router;
