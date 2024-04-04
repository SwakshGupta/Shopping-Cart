import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";
import Addproduct from "./Components/Addproduct";
import Home from "./Components/Home";
import Sign_up from "./Components/Sign_up";
import Login from "./Components/Login";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  return (
    <div className="h-screen bg-gray-300">
      <Router>
        {isLoggedIn && <Navbar setSearchQuery={setSearchQuery} />}{" "}
        {/* Render Navbar only if user is logged in */}
        <Routes>
          {!isLoggedIn && <Route path="/" element={<Home />} />}{" "}
          {/* Render Home component only if user is not logged in */}
          <Route
            exact
            path="/Product"
            element={
              isLoggedIn ? (
                <Item searchQuery={searchQuery} />
              ) : (
                <Navigate to="/Login" />
              )
            } // Redirect to Login if user is not logged in
          />
          {isLoggedIn && <Route path="/cart" element={<Cart />} />}{" "}
          {/* Render Cart component only if user is logged in */}
          {isLoggedIn && (
            <Route path="/AddProduct" element={<Addproduct />} />
          )}{" "}
          {/* Render AddProduct component only if user is logged in */}
          {!isLoggedIn && <Route path="/Signup" element={<Sign_up />} />}{" "}
          {/* Render Signup component only if user is not logged in */}
          {!isLoggedIn && (
            <Route
              path="/Login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />} // we will be passing this as prop to clarify the user is logged in and hence access to all other routes
            />
          )}{" "}
          {/* Render Login component only if user is not logged in */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
