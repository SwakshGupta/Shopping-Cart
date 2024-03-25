import React from "react";
import Navbar from "./Components/navbar";
import Sidebar from "./Components/Sidebar";
import ProductCard from "./Components/ProductCart";

function App() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$50",
    },
    {
      id: 1,
      name: "Product 1",
      price: "$50",
    },
  ];

  return (
    <>
      <div className=" h-screen  bg-slate-600">
        <Navbar />

        <div className="flex  flex-1">
          <div className="flex flex-wrap justify-center p-4">
            {products.map((product) => (
              <div key={product.id} className="m-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
