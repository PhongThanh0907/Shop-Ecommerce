import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
  nameProduct: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    require: true,
  },
  photos: [String],
  description: {
    type: Object,
  },
  quantity: {
    type: Number,
  },
  bestSell: {
    type: Boolean,
  },
});
ProductSchema.index({ name: "text", nameProduct: "text" });

export default mongoose.model("Product", ProductSchema);
