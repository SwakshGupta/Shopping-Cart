const ProductPage = require("../models/ProductPage");

const getAll = async (req, res) => {
  try {
    const products = await ProductPage.find(); // it will find all the products

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const addProduct = async (req, res) => {
  const { productId, title, description, images, price } = req.body; // Extract the following things from req.body

  try {
    const newProduct = new ProductPage({
      // then make a new product out of it
      productId,
      title,
      description,
      images,
      price,
    });

    const savedProduct = await newProduct.save();
    return res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error adding product:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteProduct = async (req, res) => {
  const id = req.params.id; // to get the id of the product which is to be deleted

  try {
    const deletedProduct = await ProductPage.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Unable to delete the product" });
    }
    return res
      .status(200)
      .json({ message: "Product has been deleted successfully" });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Internal server error" });
  }
};

const getById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await ProductPage.findById(id);

    if (!product) {
      return res.status(404).json({ message: "No product found for this id" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteAllProducts = async (req, res) => {
  try {
    await ProductPage.deleteMany({});

    return res
      .status(200)
      .json({ message: "All products deleted successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getAll,
  addProduct,
  deleteProduct,
  deleteAllProducts,
  getById,
};
