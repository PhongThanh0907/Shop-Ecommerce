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

export const getProducts = async (req, res, next) => {
  const { searchValue, min, max, brands, sort } = req.query;

  const search = {};

  if (min && max) search.price = { $gt: min, $lt: max };

  if (brands)
    search.brand = {
      $in: brands.split(",").map((b) => mongoose.Types.ObjectId(b)),
    };

  let searchInput = {};

  if (searchValue) searchInput = { $text: { $search: searchValue } };

  const sortParams = {};
  if (sort) sortParams.price = sort;
  try {
    const products = await Product.find(search)
      .find(searchInput)
      .sort(sortParams)
      .limit(req.query.limit);
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};
