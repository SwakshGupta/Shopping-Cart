import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/context";
import { CartContext } from "../context/Cart";

const Item = () => {
  const { items, setitems } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/product/getall"
        );
        setitems(response.data);
        setLoading(false); // Set loading to false after successful data fetch
      } catch (error) {
        console.error("Error:", error);
        setError(error); // Set error state if an error occurs
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    // Construct the data in the required format
    const cartData = {
      products: [
        {
          productId: product._id, // Assuming product._id contains the product ID
        },
      ],
    };

    // Send the new item to the backend
    axios
      .post("http://localhost:8001/api/cart/add", cartData)
      .then((response) => {
        console.log("Item added to cart successfully:", response.data);
        // Update the local cartItems state
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
      {items.map((uniqueItem) => (
        <div
          key={uniqueItem.Id}
          className="max-w-sm rounded-lg overflow-hidden shadow-md bg-white m-4"
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
