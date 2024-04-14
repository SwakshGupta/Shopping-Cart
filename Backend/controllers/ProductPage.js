const Productpage = require("../models/ProductPage");

const getall = async (req, res) => {
  try {
    const product = await Productpage.find(); // it will find all the products

    if (product.length == 0) {
      return res.status(404).json({ messege: "no Product has been found " });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const Addproduct = async (req, res) => {
  const { productId, title, description, images, price } = req.body; // Extract the fllowing things from req.body

  try {
    const newProduct = new Productpage({
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

const DeleteProduct = async (req, res) => {
  const id = req.params.id; // to get the id of the product which is to be deleted

  try {
    const deleteProduct = await Productpage.findByIdAndDelete(id);

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
    const product = await Productpage.findById(id);

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
const deleteAllProducts = async (req, res) => {
  try {
    await Productpage.deleteMany({});

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
