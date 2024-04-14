import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/Cart";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { setSearchQuery } = useContext(CartContext);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  }; // For the searching purpose the state is changing  when we are writing anything on the search bar

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-lime-700 p-4 shadow-lg">
      <div className="flex items-center justify-between">
        <button className="text-white text-lg transition duration-300 hover:text-black hover:bg-black hover:bg-opacity-25 px-4 py-2 rounded-full">
          <Link to="/">Home</Link>
        </button>
        <div className="flex items-center w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-full bg-black text-white outline-none"
            onChange={handleSearch}
          />
        </div>
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
                Wishlist
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// with the help of link from react router dom  we have linked our buttons to the respective routes
