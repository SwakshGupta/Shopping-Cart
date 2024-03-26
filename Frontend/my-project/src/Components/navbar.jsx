import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Home button */}
        <button className="text-white text-lg">
          <Link to="/">Home</Link>
        </button>
        {/* Search bar */}
        <div className="w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-full bg-gray-700 text-white outline-none"
          />
        </div>
        {/* Cart button */}
        <button className="text-white text-lg">
          <Link to="/cart">Cart</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// with the help of link from react router dom  we have linked our buttons to the respective routes
