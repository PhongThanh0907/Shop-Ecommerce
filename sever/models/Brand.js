import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  photos: [String],
});

export default mongoose.model("Brand", BrandSchema);
