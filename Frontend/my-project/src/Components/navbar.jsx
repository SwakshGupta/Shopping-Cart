import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Home button */}
        <button className="text-white text-lg">Home</button>
        {/* Search bar */}
        <div className="w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-full bg-gray-700 text-white outline-none"
          />
        </div>
        {/* Cart button */}
        <button className="text-white text-lg">Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
