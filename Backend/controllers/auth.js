// auth.js
const Signup = require("../models/User");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const createError = require("http-errors");

const secretkey = "kTJD2y4On/6SjMEWOLFb6QmggHIE3jkVCX1TxI7QMV4=";

const registerUser = async (req, res, next) => {
  const { Email, password } = req.body;

  try {
    // Hash the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    // Create a new user with the hashed password
    const newUser = new Signup({
      Email,
      password: hash,
    });

    // Save the user to the database
    await newUser.save();

    return res.status(201).json({ user: newUser });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { Email } = req.body; // here we are getting the Email from the req.body

  try {
    const user = await Signup.findOne({ Email });

    if (!user) {
      return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      // here we are checking whether our password is correct or not
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong username or password"));
    }

    const token = JWT.sign({ id: user._id }, secretkey); // if the password is correct then a token is generated

    const { password, ...other } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true }) // access_token is the name of cookie
      .status(200)
      .json(other);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
