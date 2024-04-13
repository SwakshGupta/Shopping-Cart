const { Router } = require("express");

const {
  getall,
  Addproduct,
  DeleteProduct,
  Getbyid,
  deleteAllProducts,
} = require("../controllers/Home_product");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello from the server side");
});

router.post("/add", Addproduct);
router.post("/delete/:id", DeleteProduct);
router.get("/getall", getall);
router.get("/get/:id", Getbyid);
router.post("/deleteall", deleteAllProducts);

module.exports = router;
