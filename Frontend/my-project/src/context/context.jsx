// here we will define our context and our provider

import { createContext, useState } from "react";

export const ProductContext = createContext(); // store for the products

export const ProductProvider = (props) => {
  const [items, setitems] = useState([]);

  const cartValue = { items, setitems };

  return (
    <ProductContext.Provider value={cartValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

// now we have created our context we have to wrap it inside our provider along with the components so that the children components can use the context created

// who want to acess our context
