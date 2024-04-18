import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { category1, name } = useParams(); // Get category and name from URL params

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8006/api/productpage/getall`
        );
        // Find the product based on category and name
        const foundProduct = response.data.find(
          (product) =>
            product.category.toLowerCase() === category1.toLowerCase() &&
            product.name.toLowerCase() === name.toLowerCase()
        );
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [category1, name]); // Re-fetch product when category or name change

  if (!product) {
    return <div className="container mx-auto mt-8">Loading...</div>;
  }

  return (
    <div className="bg-gray-100">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src={product.images}
            alt={product.name}
            className="w-full h-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 md:ml-8">
          <h1 className="text-6xl font-bold mb-8 md:mb-20">{product.name}</h1>
          <p className="text-4xl font-semibold mb-8 md:mb-7">
            ${product.price}
          </p>
          <div className="border-b border-gray-300 mb-8 pb-8">
            <p className="text-lg mb-4">{product.description}</p>
          </div>
          <div className="flex items-center">
            <a
              href={`https://wa.me/1234567890/?text=I'm%20interested%20in%20this%20product:%20${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-green-500 text-white font-bold py-2 px-4 rounded flex items-center">
                <img
                  src="whatsapp-logo.png"
                  alt="WhatsApp Logo"
                  className="w-6 h-6 mr-2"
                />
                <span>Order on WhatsApp</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
