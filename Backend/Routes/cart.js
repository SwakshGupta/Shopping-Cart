// here we will define all the routes of the cart

const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("hello from the server side");
});

router.post("/add");
router.post("/delete/:id");
router.post("/getall");
router.get("/get/:id");

module.exports = router;
