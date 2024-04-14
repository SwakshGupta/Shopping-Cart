// the main reason to get this cart context api to manage the cart data

import React, { createContext, useState } from "react";

export const CartContext = createContext(); // This is store where all the data of cart will be stored

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const [searchQuery, setSearchQuery] = useState(""); // this state is added for the searching purpose in the product page

  // Functions to add, remove, or update items in the cart can go here

  return (
    <CartContext.Provider
      value={{ cartItems, setCartItems, searchQuery, setSearchQuery }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

// This is the second context api for the cart to manage the state for the cart

// it will be fetching data from the cart route and will display it accordinly
