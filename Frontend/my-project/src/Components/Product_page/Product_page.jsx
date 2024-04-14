import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8006/api/product/getall`
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto mt-8">
      {products.map((product) => (
        <div
          key={product._id}
          className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="mb-4">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-auto"
            />
          </div>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold mb-4">${product.price}</p>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
