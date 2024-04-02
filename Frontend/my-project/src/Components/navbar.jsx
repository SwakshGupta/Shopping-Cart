import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
  const [searchQuery, setSearchQueryLocal] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQueryLocal(query);
    setSearchQuery(query);
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
        {/* Add Product button */}
        <button className="text-white text-lg mr-12 transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full">
          <Link to="/AddProduct">Add Product</Link>
        </button>
        {/* Cart button */}
        <button className="text-white text-lg mr-12 transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full">
          <Link to="/cart">Cart</Link>
        </button>
        {/* Logout button */}
        <button className="text-white text-lg transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// with the help of link from react router dom  we have linked our buttons to the respective routes
