import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Cart from "./Components/Shopping_Cart";
import Item from "./Components/ProductCart";

function App() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$50",
      image: "https://via.placeholder.com/300",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$70",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="h-screen bg-slate-600">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home products={products} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

//  here we have defined a seperate compoenet to render our product
const Home = ({ products }) => (
  <div className="flex flex-wrap justify-center">
    {products.map((product) => (
      <Item key={product.id} product={product} />
    ))}
  </div>
);

export default App;
