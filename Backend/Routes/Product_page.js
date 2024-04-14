const { Router } = require("express");

const router = Router();

const {
  getAll,
  addProduct,
  deleteProduct,
  deleteAllProducts,
  getById,
} = require("../controllers/ProductPage");

router.get("/", getAll);
router.post("/add", addProduct);
router.delete("/:id", deleteProduct);
router.delete("/deleteAll", deleteAllProducts);
router.get("/:id", getById);

module.exports = router;
