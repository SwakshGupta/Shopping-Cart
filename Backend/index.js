const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Routes/Product");
const Router = require("./Routes/cart");
const User = require("./Routes/User");

const app = express();

const PORT = 8001;
const URI = "mongodb://127.0.0.1:27017/CART";

// middlewwares

app.use(cors()); // This is to accept request coming from different origins
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.json()); //This will help to parse the json file and make it available to the req.body
app.use(express.urlencoded({ extended: false })); // this middle ware is  use to parse the form data becuase data coming from the fornt end is JSON

mongoose
  .connect(URI)
  .then(() => console.log("Database has been connected to the server"))
  .catch((err) => console.error("Error connecting the database", err));

// here we have defined our routes

app.use("/api/product", router);
app.use("/api/cart", Router);
app.use("/api/User", User);

app.listen(PORT, () => console.log(`Server has been started at PORT ${PORT}`));
