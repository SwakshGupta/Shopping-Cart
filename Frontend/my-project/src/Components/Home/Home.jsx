import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";
import axios from "axios";

function Home() {
  const { homeproduct, setHomeProduct } = useContext(ProductContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/home/getall"
        );
        setHomeProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setHomeProduct]);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Home page</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {homeproduct.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105"
          >
            <Link to={`/category/${product.category}`}>
              <img
                src={product.image}
                alt={product.category}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <Link to={`/category/${product.category}`}>
                <h3 className="text-lg font-semibold mb-2">
                  {product.category}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
