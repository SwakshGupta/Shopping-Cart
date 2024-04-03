const express = require("express");

const router = express();

router.get("/logout", (req, res) => {
  res.clearCookie("acess_token");
});

module.exports = router;
