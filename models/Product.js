const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  category: { type: String, required: false },
  imageUrl: { type: String, required: false },
  stock: { type: Number, default: 0 },
  brand: { type: String, required: false },
  rating: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isAvailable: { type: Boolean, default: true },
  tags: { type: [String], default: [] },
});

// Mongoose model for Product
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
