const Cart = require("../models/cart");

const getall = async (req, res) => {
  try {
    const product = await Cart.find(); // it will find all the products

    if (product.length == 0) {
      return res.status(404).json({ messege: "no Product has been found " });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const AddCart = async (req, res) => {
  const cart = new Cart({
    products: req.body.products,
  });

  try {
    const newCart = await cart.save();
    res.status(201).json(newCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const DeleteCart = async (req, res) => {
  const id = req.params.id; // to get the id of the product which is to be deleted

  try {
    const deleteProduct = await Cart.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(200).json({ message: "Unable to delete the todo " });
    }
    return res
      .status(200)
      .json({ message: "Product has been deleted successfully" });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Internal server error " });
  }
};

const Getbyid = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Cart.findById(id);

    if (!product) {
      return res
        .status(404)
        .json({ message: "no Product has been found for this id" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ messege: "Internal server error " });
  }
};

module.exports = {
  getall,
  AddCart,
  DeleteCart,
  Getbyid,
};
