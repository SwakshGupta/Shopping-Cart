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

      // Find the product with the given productId
      const product = await Product.findOne({ _id: productId });

      // If product not found, return 404 error
      if (!product) {
        return res
          .status(404)
          .json({ message: `Product with Id ${productId} not found` });
      }

      // Find the cart (assuming there's only one cart for now)
      let cart = await Cart.findOne({});

      // If cart doesn't exist, create a new cart with the product
      if (!cart) {
        cart = new Cart({
          products: [product._id],
        });
      } else {
        // If cart exists, push the productId into the cart
        cart.products.push(product._id);
      }

      // Save the updated cart
      await cart.save();
    }

    // Return success message
    res.json({ message: "Products added to cart successfully" });
  } catch (error) {
    console.error("Error adding item(s) to cart:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const DeleteCart = async (req, res) => {
  const { productId } = req.body;

  try {
    const cart = await Cart.findOne();

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Find the index of the product with the given productId
    const index = cart.products.findIndex(
      (product) => product.productId === productId
    );

    // If the product with the given productId is found, remove it from the products array
    if (index !== -1) {
      cart.products.splice(index, 1);
      await cart.save();
      return res.status(200).json({ message: "Product deleted successfully" });
    } else {
      return res.status(404).json({ message: "Product not found in the cart" });
    }
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

const DeleteAllCartItems = async (req, res) => {
  try {
    // Delete all items from the cart
    await Cart.deleteMany({});

    return res
      .status(200)
      .json({ message: "All items deleted from cart successfully" });
  } catch (error) {
    console.error("Error deleting items from cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getall,
  AddCart,
  DeleteCart,
  Getbyid,
  DeleteAllCartItems,
};
