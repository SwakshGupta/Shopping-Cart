const { Router } = require("express");

const router = Router();

const {
  getAll,
  addProduct,
  deleteProduct,
  deleteAllProducts,
  getById,
} = require("../controllers/ProductPage");

router.get("/getall", getAll);
router.post("/add", addProduct);
router.post("/:id", deleteProduct);
router.post("/deleteall", deleteAllProducts);
router.get("/:id", getById);

module.exports = router;
