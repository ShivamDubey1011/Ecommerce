// services/orderService.js
const Order = require("../models/Order");
const Product = require("../models/Product");

class OrderService {
  async createOrder(orderDTO) {
    const products = await Product.find({
      _id: { $in: orderDTO.products.map((p) => p.productId) },
    });

    if (!products.length) {
      throw new Error("Some products not found");
    }

    const totalPrice = orderDTO.products.reduce((total, item) => {
      const product = products.find(
        (p) => p.id.toString() === item.productId.toString()
      );
      if (!product) return total;
      return total + product.price * item.quantity;
    }, 0);

    const newOrder = new Order({
      user: orderDTO.userId,
      products: orderDTO.products.map((item) => ({
        product: item.productId,
        quantity: item.quantity,
        price: products.find(
          (p) => p.id.toString() === item.productId.toString()
        ).price,
      })),
      totalPrice: totalPrice,
      shippingAddress: orderDTO.shippingAddress,
    });

    return await newOrder.save();
  }

  async getOrderById(orderId) {
    try {
      // Populate the user field and exclude the password
      return await Order.findById(orderId)
        .populate({
          path: "user",  // Populate the 'user' field
          select: "id name email", // Only select the 'id', 'name', and 'email' fields, exclude 'password'
        })
        .populate("products.product");  // Populate the products' 'product' field
    } catch (err) {
      throw new Error("Error fetching order: " + err.message);
    }
  }

  async updateOrderStatus(orderId, status) {
    const order = await Order.findById(orderId);
    if (!order) throw new Error("Order not found");
    order.status = status;
    return await order.save();
  }

  async getOrdersByUserId(userId) {
    return await Order.find({ user: userId }).populate("products.product");
  }
}

module.exports = new OrderService();
