// controllers/orderController.js
const OrderService = require("../service/orderService");
const OrderDTO = require("../dto/OrderDto");

class OrderController {
  async createOrder(req, res) {
    try {
      const orderDTO = OrderDTO.fromRequestBody(req.body);
      const order = await OrderService.createOrder(orderDTO);
      return res.status(201).json(order);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getOrder(req, res) {
    try {
      const order = await OrderService.getOrderById(req.params.id);
      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }
      return res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async updateOrderStatus(req, res) {
    try {
      const { status } = req.body;
      const order = await OrderService.updateOrderStatus(req.params.id, status);
      return res.status(200).json(order);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  async getUserOrders(req, res) {
    try {
      const orders = await OrderService.getOrdersByUserId(req.user._id); // assuming req.user is set by an auth middleware
      return res.status(200).json(orders);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
