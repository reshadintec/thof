const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, requried: true},
    img: { type: String, reuired: true },
    price: { type: Number, reuired: true },
    gender: { type: String },
    size: {type: Array},
    strength: {type: String},
    inStock: {type: Boolean, default: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);