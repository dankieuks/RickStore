import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    brand: {
      type: String,
      require: true,
      trim: true,
    },
    price: {
      type: Number,
      require: true,
      trim: true,
    },
    description: { type: String, require: true, trim: true },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
    images: {
      type: Array,
    },
    color: {
      type: String,
      enum: ["Black", "Red", "Blue"],
    },
    quantity: {
      type: Number,
      default: 0,
    },
    ratings: [
      {
        star: { type: Number },
        postedBy: { type: mongoose.Types.ObjectId, ref: "User" },
        comment: { type: String },
      },
    ],
    total: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Product", productSchema);
