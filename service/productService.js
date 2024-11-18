const Product = require("../models/Product");
const ProductDto = require("../dto/ProductDto");

const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      imageUrl,
      stock,
      brand,
      rating,
      tags,
    } = req.body;
  } catch (err) {}
};
