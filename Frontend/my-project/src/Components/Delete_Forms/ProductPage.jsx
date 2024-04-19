import React, { useState } from "react";
import axios from "axios";

function DeleteProductPageForm() {
  const [productData, setProductData] = useState(null);
  const [productId, setProductId] = useState("");
  const [category, setCategory] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "productId") {
      setProductId(value);
    } else if (name === "category") {
      setCategory(value);
    }
    setProductData(null);
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:8006/api/productpage?name=${productId}&category=${category}`
      );
      setProductData(response.data);

      if (response.data === null) {
        setErrorMessage("No product found with the given details.");
      }
    } catch (error) {
      setErrorMessage("Error fetching product. Please check the input.");
      console.error("Error fetching product:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:8006/api/products/${productData._id}`
      );
      console.log("Product deleted successfully");
      setProductData(null);
      setProductId("");
      setCategory("");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1" htmlFor="productName">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="productId"
            value={productId}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1" htmlFor="productCategory">
            Product Category:
          </label>
          <select
            id="productCategory"
            name="category"
            value={category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select Category</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="monitor">Monitor</option>
            <option value="Laptop/Pcs">Laptop/PCs</option>
            <option value="Audio">Audio</option>
            <option value="Consoles">Consoles</option>
            <option value="Controllers">Controllers</option>
            <option value="MousePads">MousePads</option>
            <option value="Phone">Phone</option>
            <option value="Speakers">Speakers</option>
            <option value="GamingBag">GamingBag</option>
            <option value="OtherItems">OtherItems</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
        >
          Search Product
        </button>
      </form>

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}

      {productData && (
        <div className="mt-4">
          <img
            src={productData.images}
            alt={productData.name}
            className="w-full h-auto"
          />
          <button
            onClick={handleDelete}
            className="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
          >
            Delete Product
          </button>
        </div>
      )}
    </div>
  );
}

export default DeleteProductPageForm;
