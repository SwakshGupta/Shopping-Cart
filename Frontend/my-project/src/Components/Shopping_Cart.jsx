import React, { useContext, useEffect } from "react";
import { Cartcontext } from "../context/context";
import axios from "axios";

const Cart = () => {
  const { items, Setitems } = useContext(Cartcontext);

  // here we are fetching the items using the get method of axios

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/cart/getall");
      Setitems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  // here we are using use effect hook which  render our items only once since we are uisng empty array

  useEffect(() => {
    fetchItems();
  }, []);

  // to remove the items we are using delete method of axios

  const removeFromCart = async (index, productId) => {
    try {
      await axios.delete(`http://localhost:8001/api/cart/delete/${productId}`);

      const updatedItems = [...items];
      updatedItems.splice(index, 1);
      Setitems(updatedItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  // Check if cart is empty
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Cart is empty</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <ul className="divide-y divide-gray-300">
        {items.map((item, index) => (
          <li key={index} className="py-2 flex items-center">
            <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="ml-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-black">{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

// here basically we are taking the content out of our context using useContext hook

// if the cart is empty then return null and if cart has items then list it down
