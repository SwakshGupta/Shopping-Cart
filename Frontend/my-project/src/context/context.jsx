// here we will define our context and our provider

import { createContext, useState } from "react";

export const Cartcontext = createContext();

export const CartProvider = (props) => {
  const [items, Setitems] = useState([]);

  const cartValue = { items, Setitems };

  return (
    <Cartcontext.Provider value={cartValue}>
      {props.children}
    </Cartcontext.Provider>
  );
};

// now we have created our context we have to wrap it inside our provider along with the components

// who want to acess our context
