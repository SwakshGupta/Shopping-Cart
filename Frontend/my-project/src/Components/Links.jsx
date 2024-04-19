import React from "react";
import { useNavigate } from "react-router-dom";

function Links() {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/AddProduct");
  };

  const handleAddProductPage = () => {
    navigate("/Add_Product_Page");
  };

  const handleAddHomeProduct = () => {
    navigate("/Add_Home_Product");
  };

  const handleDeleteProductPage = () => {
    navigate("/ProductPage");
  };

  const handleDeleteProduct = () => {
    navigate("/Product");
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleAddProduct}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500"
        >
          Add Product
        </button>

        <button
          onClick={handleAddProductPage}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500"
        >
          Add Product Page
        </button>

        <button
          onClick={handleAddHomeProduct}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-green-500"
        >
          Add Home Product
        </button>

        <button
          onClick={handleDeleteProductPage}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-red-500"
        >
          Delete Product Page
        </button>

        <button
          onClick={handleDeleteProduct}
          className="bg-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-110 hover:bg-red-500"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
}

export default Links;
