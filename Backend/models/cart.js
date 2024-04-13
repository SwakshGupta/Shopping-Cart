// this is the cart model it contains the prouct id in its schema from that product we will  add product to the cart

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true, // ref of product model is given
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;

// after this i will give reference of user model so that we can integrate the user model in the cart model
