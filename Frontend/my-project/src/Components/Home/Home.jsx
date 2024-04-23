import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context/context";
import axios from "axios";

function Home() {
  const { homeproduct, setHomeProduct, category, setCategory } =
    useContext(ProductContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8006/api/home/getall"
        );
        setHomeProduct(response.data);
        setLoading(false); // Set loading to false when products are fetched
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [setHomeProduct]);

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-bold mb-8">Welcome to the Home page</h1>
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-l-4 border-lime-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {homeproduct.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-md shadow-md overflow-hidden transform transition-transform hover:scale-105"
            >
              <Link
                to={`/Product/${product.category}`}
                onClick={() => setCategory(product.category)}
              >
                <img
                  src={product.image}
                  alt={product.category}
                  className="w-full h-48 object-cover"
                />
              </Link>

              <div className="p-4">
                <Link
                  to={`/Product/${product.category}`}
                  onClick={() => setCategory(product.category)}
                >
                  <h3 className="text-lg font-semibold mb-2">
                    {product.category}
                  </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
