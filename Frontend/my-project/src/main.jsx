import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ProductProvider } from "./context/context.jsx";
import { CartProvider } from "./context/Cart.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>
);

// here we have wrapped our children components inside both the context api

// here we are using two context api to manage the state of the is the product context api and other is cart context api
