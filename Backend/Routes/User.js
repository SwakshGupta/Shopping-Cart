const { Router } = require("express");

const {
  Createuser,
  DeleteUser,
  getAll,
  getbyid,
} = require("../controllers/User");

const router = Router();

router.post("/add", Createuser);

router.get("/getall", getAll);

router.get("/:id", getbyid);

router.post("/delete/:id", DeleteUser);

module.exports = router;
