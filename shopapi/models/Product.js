const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, requried: true},
    img: { type: String, reuired: true },
    price: { type: Number, reuired: true },
    gender: { type: String },
    size: {type: String},
    strength: {type: String},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);