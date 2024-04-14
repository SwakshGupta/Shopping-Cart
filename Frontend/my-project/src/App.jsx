import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Addproduct from "./Components/Addproduct";
import Home from "./Components/Home/Home";
import Add_Home_Product from "./Components/Home/Add_Home";

function App() {
  return (
    <div className="h-screen bg-gray-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProduct" element={<Addproduct />} />
          <Route path="/Add_Home_Product" element={<Add_Home_Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
