// This is our user model it contains Email and password

const { Schema, model } = require("mongoose");

const Signup = new Schema(
  {
    Email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sign = model("Sign", Signup);

module.exports = Sign;
