// dtos/orderDTO.js
class OrderDTO {
    constructor(userId, products, shippingAddress) {
      this.userId = userId;
      this.products = products; // Array of { productId, quantity }
      this.shippingAddress = shippingAddress;
    }
  
    static fromRequestBody(body) {
      return new OrderDTO(body.userId, body.products, body.shippingAddress);
    }
  }
  
  module.exports = OrderDTO;
  