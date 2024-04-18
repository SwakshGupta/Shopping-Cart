import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/context";
import { CartContext } from "../context/Cart";

const Item = () => {
  const {
    items,
    setItems,
    sortOrder,
    setSortOrder,
    setName,
    setCategory1,
    name,
    category1,
  } = useContext(ProductContext);
  const { cartItems, setCartItems, searchQuery } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);
  const [showSortButtons, setShowSortButtons] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/product/getall"
        );
        setItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [setItems]);

  useEffect(() => {
    const filtered = items.filter(
      (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()) // here is the code for searching items
    );

    let sortedItems = [...filtered]; // here is the logic to sort the items
    if (sortOrder === "lowToHigh") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highToLow") {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    const category = location.pathname.split("/")[2]; // Extract category from URL params

    // Filter items by category obtained from the URL
    const categoryFilteredItems = category
      ? sortedItems.filter((item) => item.category === category)
      : sortedItems;
    setFilteredItems(categoryFilteredItems);
  }, [searchQuery, items, sortOrder, location.pathname]);

  const handleAddToCart = (product) => {
    const cartData = {
      products: [
        {
          productId: product._id,
        },
      ],
    };

    axios
      .post("http://localhost:8006/api/cart/add", cartData)
      .then((response) => {
        console.log("Item added to cart successfully:", response.data);
        setCartItems([...cartItems, product]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setShowSortButtons(false);
  };

  const toggleSortButtons = () => {
    setShowSortButtons(!showSortButtons);
  };

  const handleItemClick = (category, name) => {
    setCategory1(category);
    setName(name);
    console.log(name, category);
    window.location.href = `/productPage/${category}/${name}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="mt-4">
      <div className="relative">
        <button
          className="bg-black hover:bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center z-10 transition duration-300 ease-in-out transform hover:scale-10"
          onClick={toggleSortButtons}
        >
          Sort
          <svg
            className="w-4 h-4 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 10a2 2 0 114 0 2 2 0 01-4 0zM14 10a2 2 0 114 0 2 2 0 01-4 0zM6 10a2 2 0 114 0 2 2 0 01-4 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {showSortButtons && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
            <button
              onClick={() => handleSort("lowToHigh")}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white transition duration-300"
            >
              Low to High
            </button>
            <button
              onClick={() => handleSort("highToLow")}
              className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-green-500 hover:text-white transition duration-300"
            >
              High to Low
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-wrap justify-center relative z-0">
        {filteredItems.map((uniqueItem) => (
          <div
            key={uniqueItem.Id}
            className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4 transform hover:scale-105 transition duration-300"
            onClick={() =>
              handleItemClick(uniqueItem.category, uniqueItem.name)
            }
          >
            <img
              className="w-full h-64 object-cover rounded-t-lg"
              src={uniqueItem.image}
              alt={uniqueItem.name}
            />

            <div className="px-6 py-4">
              <h2 className="font-bold text-xl mb-2">{uniqueItem.name}</h2>
              <p className="text-gray-700 text-base">{`Price: ${uniqueItem.price}`}</p>
            </div>
            <div className="px-6 py-4 flex justify-center">
              <button
                onClick={() => handleAddToCart(uniqueItem)}
                className="bg-black hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;

// The product will be listed on the main screen in the form of card with a button

// when the button is clicked  the data is saved in the context
