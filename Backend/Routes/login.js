const { Router } = require("express");
const { loginUser } = require("../controllers/auth"); // Import registerUser and loginUser separately
const router = Router();

router.post("/login", loginUser); // when the user login then a  token is generated which is given to the user in the frm of cookie

module.exports = router;

// we have created its functions inside the controllers

// so basically we will provide information from our login route and then it will create a token for authentcation and from that token

// we can acess the Product list  components
