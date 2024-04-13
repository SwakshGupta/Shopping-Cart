// here we are going to define the schema for our product

const { Schema, model } = require("mongoose");

const Product_Home_Schema = new Schema(
  {
    Id: {
      type: String,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Home_Product = model("Home_Product", Product_Home_Schema);

module.exports = Home_Product;
