const { Schema, model } = require("mongoose");

const ProductPageSchema = new Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      // Change the field name to singular, e.g., 'image'
      type: String, // Change to type String to store a single image URL
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductPage = model("ProductPage", ProductPageSchema);

module.exports = ProductPage;
