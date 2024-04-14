const { Schema, model } = require("mongoose");

const ProductPageSchema = new Schema(
  {
    productId: {
      type: String,

      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    price: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductPage = model("ProductPage", ProductPageSchema);

module.exports = ProductPage;
