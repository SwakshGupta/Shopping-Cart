import React, { useContext, useEffect } from "react";
import { CartContext } from "../context/Cart";
import axios from "axios";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/cart/getall");
      setCartItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []); // // Include props.product in dependency array to re-run effect when new product data is passed

  const removeFromCart = async (productId) => {
    console.log(productId);
    try {
      await axios.delete(`http://localhost:8001/api/cart/delete/${productId}`);

      // Filter out the deleted product from cartItems based on productId
      const updatedItems = cartItems.filter(
        (item) => !item.products.includes(productId)
      );
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };
  // Check if cart is empty
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
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
        {cartItems.map((item, index) => (
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
              onClick={() => removeFromCart(item.products[0])}
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
