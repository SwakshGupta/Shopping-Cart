import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/context";
import { CartContext } from "../context/Cart";

const Item = ({ searchQuery }) => {
  // extracting the search query from the app.jsx and then suisng the filter function to filter the data according to the query
  const { items, setitems } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/product/getall"
        );
        setitems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = items.filter(
      (
        item // this is the filter function which is running to filter my product cart
      ) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  }, [searchQuery, items]);

  const handleAddToCart = (product) => {
    const cartData = {
      products: [
        {
          productId: product._id,
        },
      ],
    };

    axios
      .post("http://localhost:8001/api/cart/add", cartData)
      .then((response) => {
        console.log("Item added to cart successfully:", response.data);
        setCartItems([...cartItems, product]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center">
      {filteredItems.map((uniqueItem) => (
        <div
          key={uniqueItem.Id}
          className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4 transform hover:scale-105 transition duration-300"
        >
          <img
            className="w-full h-64 object-cover rounded-t-lg"
            src={uniqueItem.image}
            alt={uniqueItem.name}
          />

          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{uniqueItem.name}</h2>
            <p className="text-gray-700 text-base">{`Price: $${uniqueItem.price}`}</p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button
              onClick={() => handleAddToCart(uniqueItem)}
              className="bg-black hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

// The product will be listed on the main screen in the form of card with a button

// when the button is clicked  the data is saved in the context
