const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./Routes/Product");

const app = express();

const PORT = 8001;
const URI = "mongodb://127.0.0.1:27017/CART";

// middlewwares

app.use(cors()); // This is to accept request coming from different origins
app.use(express.json()); //This will help to parse the json file and make it available to the req.body

mongoose
  .connect(URI)
  .then(() => console.log("Database has been connected to the server"))
  .catch((err) => console.error("Error connecting the database", err));

// here we have defined our routes

app.use("/api/cart", router);

app.listen(PORT, () => console.log(`Server has been started at PORT ${PORT}`));
