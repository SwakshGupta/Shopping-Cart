const express = require("express");

const router = express.Router();

router.post("/logout", (req, res) => {
  // Clear the "access_token" cookie
  try {
    // Clear the "access_token" cookie
    res.clearCookie("access_token");

    // Send a response indicating successful logout
    res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    console.error(err);
    // Handle any errors
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
