const Home_Product = require("../models/Home_product");

const getall = async (req, res) => {
  try {
    const products = await Home_Product.find(); // Retrieve all products

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const Addproduct = async (req, res) => {
  const { Id, name, image, category } = req.body;

  try {
    const newProduct = new Home_Product({
      Id,
      name,
      image,
      category,
    });

    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const DeleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deletedProduct = await Home_Product.findByIdAndDelete(id);

    if (!deletedProduct) {
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
    const product = await Home_Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    await Home_Product.deleteMany({});
    return res
      .status(200)
      .json({ message: "All products deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getall,
  Addproduct,
  DeleteProduct,
  deleteAllProducts,
  Getbyid,
};
