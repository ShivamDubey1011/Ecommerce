// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrder,
  getUserOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const authMiddleware = require("../middlewares/authMiddleware");

// Create an order
router.post("/create", authMiddleware, createOrder);

// Get a specific order by ID
router.get("/:id", authMiddleware, getOrder);

// Get all orders by user
router.get("/", authMiddleware, getUserOrders);

// Update order status (e.g., "Shipped", "Delivered")
router.put("/:id/status", authMiddleware, updateOrderStatus);

module.exports = router;
