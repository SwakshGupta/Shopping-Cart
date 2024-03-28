import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ props }) => {
  const [cartItems, setCartItems] = useState([]);

  // Functions to add, remove, or update items in the cart can go here

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {props.children}
    </CartContext.Provider>
  );
};

// This is the second context api for the cart to manage the state for the cart

// it will be fetching data from the cart route and will display it accordinly
