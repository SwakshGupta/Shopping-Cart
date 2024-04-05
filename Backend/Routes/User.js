const { Router } = require("express");

const {
  Createuser,
  DeleteUser,
  getAll,
  getbyid,
  DeleteAllUsers,
} = require("../controllers/User");

const router = Router();

router.post("/add", Createuser);

router.get("/getall", getAll);

router.get("/:id", getbyid);

router.post("/delete/:id", DeleteUser);

router.post("/deleteall", DeleteAllUsers);

module.exports = router;
