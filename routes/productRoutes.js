const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const router = express.Router();

// Route for creating a product
router.post("/add", createProduct);

// Route for getting all products
router.get("/", getAllProducts);

// Route for getting a product by ID
router.get("/product/:id", getProductById);

// Route for updating a product by ID
router.put("/product/:id", updateProduct);

// Route for deleting a product by ID
router.delete("/update/:id", deleteProduct);

module.exports = router;
