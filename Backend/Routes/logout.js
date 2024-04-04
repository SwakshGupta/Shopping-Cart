const express = require("express");

const router = express.Router();

router.post("/logout", (req, res) => {
  // Clear the "access_token" cookie
  res.clearCookie("access_token");

  // Send a response indicating successful logout
  res.status(200).json({ message: "Logout successful" });
});

module.exports = router;
