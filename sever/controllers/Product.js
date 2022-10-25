import Product from "../models/Product.js";
import mongoose from "mongoose";

export const createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updatedProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllProductByType = async (req, res, next) => {
  const { min, max, brands } = req.query;
  console.log(brands);
  console.log(min);
  console.log(max);
  try {
    const products = await Product.find({
      brand: {
        $in: brands.split(",").map((b) => mongoose.Types.ObjectId(b)),
      },
      // price: { $gt: min | 1000, $lt: max | 100000000 },
    }).limit(req.query.limit);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProducts = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const products = await Hotel.find({
      ...others,
      price: { $gt: min, $lt: max },
    }).limit(req.query.limit);
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json(error);
  }
};
