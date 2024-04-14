// here we will define our context and our provider
import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [items, setItems] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // This state is added for sorting purpose
  const [homeproduct, setHomeProduct] = useState([]);
  const [category, setCategory] = useState("");

  const contextValue = {
    items,
    setItems,
    sortOrder,
    setSortOrder,
    homeproduct,
    setHomeProduct,
    category,
    setCategory,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
};

// now we have created our context we have to wrap it inside our provider along with the components so that the children components can use the context created

// who want to acess our context
