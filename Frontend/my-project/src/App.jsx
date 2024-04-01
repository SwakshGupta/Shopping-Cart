import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Addproduct from "./Components/Addproduct";
import Home from "./Components/Home";

function App() {
  // Sample product data

  return (
    <div className="h-screen bg-gray-300">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProduct" element={<Addproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
