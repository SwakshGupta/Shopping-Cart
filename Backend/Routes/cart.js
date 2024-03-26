const { Router } = require("express");

const { getall, AddCart, DeleteCart, Getbyid } = require("../controllers/cart");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello from the server side");
});

router.post("/add", AddCart);
router.post("/delete/:id", DeleteCart);
router.get("/getall", getall);
router.get("/get/:id", Getbyid);

module.exports = router;
