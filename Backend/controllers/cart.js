const Cart = require("../models/cart");
const Product = require("../models/Product");
const mongoose = require("mongoose");

const getall = async (req, res) => {
  try {
    const products = await Cart.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const AddCart = async (req, res) => {
  try {
    const { products } = req.body;

    for (const productItem of products) {
      const { productId } = productItem;

      if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: "Invalid productId format" });
      }

      const product = await Product.findById(productId);

      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with ID ${productId} not found` });
      }

      let cart = await Cart.findOne({});

      if (!cart) {
        cart = new Cart({
          products: [new mongoose.Types.ObjectId(product._id)],
        });
      } else {
        cart.products.push(new mongoose.Types.ObjectId(product._id));
      }

      await cart.save();
    }

    res.json({ message: "Products added to cart successfully" });
  } catch (error) {
    console.error("Error adding item(s) to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const DeleteCart = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteProduct = await Cart.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const Getbyid = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Cart.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found for this id" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getall,
  AddCart,
  DeleteCart,
  Getbyid,
};
