import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Addproduct from "./Components/Addproduct";
import Home from "./Components/Home/Home";
import Add_Home_Product from "./Components/Home/Add_Home";
import { ProductContext } from "./context/context";
import Add_Product_Page from "./Components/Product_page/AddProduct_page";
import ProductPage from "./Components/Product_page/Product_page";

function App() {
  const { category, name, category1 } = useContext(ProductContext); // This state is use to change the product route dynamically

  return (
    <div className="h-screen bg-gray-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Update the route to use the category */}
          <Route path={`/Product/:${category}`} element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/AddProduct" element={<Addproduct />} />
          <Route path="/Add_Home_Product" element={<Add_Home_Product />} />
          <Route path="/Add_Product_Page" element={<Add_Product_Page />} />
          <Route
            path="/productPage/:category1/:name"
            element={<ProductPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
