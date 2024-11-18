const productService = require("../service/productService");
const ProductDTO = require("../dto/ProductDto");

// Create a new product
const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    const productDTO = new ProductDTO(product);
    res
      .status(201)
      .json({ message: "Product created successfully", product: productDTO });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    const productDTOs = products.map((product) => new ProductDTO(product));
    res.status(200).json({ products: productDTOs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a product by ID
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    const productDTO = new ProductDTO(product);
    res.status(200).json({ product: productDTO });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(
      req.params.id,
      req.body
    );
    const updatedProductDTO = new ProductDTO(updatedProduct);
    res.status(200).json({
      message: "Product updated successfully",
      product: updatedProductDTO,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    const deletedProductDTO = new ProductDTO(deletedProduct);
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProductDTO,
    });
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
