import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Navbar = ({ setSearchQuery }) => {
  const [searchQuery, setSearchQueryLocal] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const Navigate = useNavigate();

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQueryLocal(query);
    setSearchQuery(query);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    // This is the logout button
    // Perform logout logic here
    axios
      .get("http://localhost:8001/api/User/logout")
      .then(() => {
        console.log("Logged out successfully");
        // Redirect to the homepage after successful logout
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout failed:", error);
        // Handle logout failure, if necessary
      });
  };

  return (
    <nav className="bg-lime-700 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Home button */}
        <button className="text-white text-lg transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full">
          <Link to="/">Home</Link>
        </button>
        {/* Search bar */}
        <div className="flex items-center w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-full bg-black text-white outline-none"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {/* Responsive menu button */}
        <div className="relative">
          <button
            className="text-white text-lg transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Responsive menu dropdown */}
          {showMenu && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-10">
              <Link
                to="/AddProduct"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Add Product
              </Link>
              <Link
                to="/cart"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Cart
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// with the help of link from react router dom  we have linked our buttons to the respective routes
