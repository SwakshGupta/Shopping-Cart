// here we will define all the routes of the cart

const { Router } = require("express");

const {
  getall,
  Addproduct,
  DeleteProduct,
  Getbyid,
  deleteAllProducts,
  searchProduct,
} = require("../controllers/Product");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello from the server side");
});

router.post("/add", Addproduct);
router.post("/delete/:id", DeleteProduct);
router.get("/getall", getall);
router.get("/get/:id", Getbyid);
router.post("/deleteall", deleteAllProducts);
router.get("/search", searchProduct);

module.exports = router;
