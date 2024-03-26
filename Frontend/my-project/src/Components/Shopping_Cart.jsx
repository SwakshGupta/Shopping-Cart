import React, { useContext, useEffect } from "react";
import { Cartcontext } from "../context/context";

const Cart = () => {
  const { items, Setitems } = useContext(Cartcontext);

  const removeFromCart = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    Setitems(updatedItems);
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
