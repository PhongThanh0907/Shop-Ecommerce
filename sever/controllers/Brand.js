import Brand from "../models/Brand.js";

export const createBrand = async (req, res, next) => {
  console.log(req.body);
  const newBrand = new Brand(req.body);
  try {
    const savedBrand = await newBrand.save();
    res.status(200).json(savedBrand);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllBrand = async (req, res, next) => {
  try {
    const brands = await Brand.find();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getBrand = async (req, res, next) => {
  try {
    const brand = await Brand.findById(req.params.id);
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json(error);
  }
};
