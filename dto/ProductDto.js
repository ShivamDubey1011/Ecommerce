class ProductDTO {
    constructor(product) {
      this.id = product._id.toString(); // Convert MongoDB ObjectId to string
      this.name = product.name; // Product name
      this.description = product.description || ""; // Product description
      this.price = product.price; // Product price
      this.category = product.category || ""; // Product category (optional)
      this.imageUrl = product.imageUrl || ""; // Product image URL (optional)
      this.stock = product.stock || 0; // Product stock (default to 0 if not present)
      this.brand = product.brand || ""; // Product brand (optional)
      this.rating = product.rating || 0; // Product rating (optional)
      this.createdAt = product.createdAt; // Product created timestamp
      this.updatedAt = product.updatedAt; // Product updated timestamp
      this.isAvailable = product.isAvailable; // Availability status of the product
      this.tags = product.tags || []; // Tags for the product (optional)
    }
  }
  
  module.exports = ProductDTO;
  