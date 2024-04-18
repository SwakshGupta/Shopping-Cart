const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./Routes/Product");
const Router = require("./Routes/cart");
const User = require("./Routes/User");
const login = require("./Routes/authentication/login");
const logout = require("./Routes/authentication/logout");
const Home_product = require("./Routes/Home_product");
const Product_Page = require("./Routes/Product_page");

const app = express();

const PORT = 8006;

const uri =
  "mongodb+srv://swakshgupta:BV6MhsGr5kd7yGBQ@cluster0.a1t2bg6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// middlewwares

app.use(cors()); // This is to accept request coming from different origins
app.use(bodyParser.json({ limit: "100mb" }));
app.use(express.json()); //This will help to parse the json file and make it available to the req.body
app.use(express.urlencoded({ extended: false })); // this middle ware is  use to parse the form data becuase data coming from the fornt end is JSON

mongoose
  .connect(uri)
  .then(() => console.log("Database has been connected to the server"))
  .catch((err) => console.error("Error connecting the database", err));

// here we have defined our routes

app.use("/api/product", router);
app.use("/api/cart", Router);
app.use("/api/home", Home_product);
app.use("/api/User", User);
app.use("/api/User", login);
app.use("/api/User", logout);
app.use("/api/productpage", Product_Page);

app.listen(PORT, () => console.log(`Server has been started at PORT ${PORT}`));

//  Passport.js simplifies the process of implementing authentication in your Node.js application, providing a robust and customizable solution for user authentication and authorization.
