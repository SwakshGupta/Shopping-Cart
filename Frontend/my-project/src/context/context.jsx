// here we will define our context and our provider

import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [items, setitems] = useState([]);

  const cartValue = { items, setitems };

  return (
    <ProductContext.Provider value={cartValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

// now we have created our context we have to wrap it inside our provider along with the components

// who want to acess our context
