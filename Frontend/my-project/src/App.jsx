import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Addproduct from "./Components/Addproduct";
import Home from "./Components/Home";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); //  i wil be seding this query in the navabr and the product cart

  return (
    <div className="h-screen bg-gray-300">
      <Router>
        <Navbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route exact path="/" element={<Item searchQuery={searchQuery} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProduct" element={<Addproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
