const Product = require("../models/Product");

// Create a new product
const createProduct = async (productData) => {
  try {
    const product = new Product(productData);
    await product.save();
    return product;
  } catch (err) {
    throw new Error("Error creating product: " + err.message);
  }
};

// Get all products
const getAllProducts = async () => {
  try {
    return await Product.find();
  } catch (err) {
    throw new Error("Error fetching products: " + err.message);
  }
};

// Get a product by ID
const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error("Error fetching product: " + err.message);
  }
};

// Update a product by ID
const updateProduct = async (productId, updatedData) => {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedData, {
      new: true,
    });
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error("Error updating product: " + err.message);
  }
};

// Delete a product by ID
const deleteProduct = async (productId) => {
  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (err) {
    throw new Error("Error deleting product: " + err.message);
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
