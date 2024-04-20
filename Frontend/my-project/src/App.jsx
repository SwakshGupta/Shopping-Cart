import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Home from "./Components/Home/Home";
import Add_Home_Product from "./Components/Home/Add_Home";
import { ProductContext } from "./context/context";
import { CartContext } from "./context/Cart";
import Add_Product_Page from "./Components/Product_page/AddProduct_page";
import ProductPage from "./Components/Product_page/Product_page";
import Links from "./Components/Links";
import DeleteProductPageForm from "./Components/Delete_Forms/ProductPage";
import Sign_up from "./Components/authentication/Sign_up";
import Login from "./Components/authentication/Login";

function App() {
  const { category } = useContext(ProductContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(CartContext); // Accessing isLoggedIn state and setIsLoggedIn function from CartContext

  return (
    <div className="h-screen bg-gray-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path={`/Product/:${category}`} element={<Item />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/Add_Home_Product" element={<Add_Home_Product />} />
          <Route path="/Add_Product_Page" element={<Add_Product_Page />} />

          {isLoggedIn && <Route path="/Links" element={<Links />} />}
          {isLoggedIn && (
            <Route path="/ProductPage" element={<DeleteProductPageForm />} />
          )}
          <Route path="/Sign" element={<Sign_up />} />
          <Route
            path="/Login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />} // Pass setIsLoggedIn to Login component
          />

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
