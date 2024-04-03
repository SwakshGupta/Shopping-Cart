const login = require("../models/User");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const createError = require("http-errors"); // Import createError for handling HTTP errors

const secretkey = "kTJD2y4On/6SjMEWOLFb6QmggHIE3jkVCX1TxI7QMV4=";

const registerUser = async (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.password, salt);

  try {
    const newUser = new login({
      name: req.body.name,
      password: hash,
    });

    await newUser.save();
    res.status(200).json({ newUser });
  } catch (err) {
    console.error(err);
    // Use next to pass the error to Express's error handling middleware
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { name } = req.body;
  try {
    const user = await login.findOne({ name });

    if (!user) {
      // Use createError to create HTTP error responses
      return next(createError(404, "User not found"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return next(createError(400, "Wrong username or password"));
    }

    const token = JWT.sign({ id: user._id }, secretkey);

    const { password, ...other } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
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
