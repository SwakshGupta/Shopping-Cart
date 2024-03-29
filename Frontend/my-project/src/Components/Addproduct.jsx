import React, { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    Id: "",
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to save product data
      const response = await axios.post(
        "http://localhost:8001/api/product/add",
        productData
      );
      console.log("Product added successfully:", response.data);

      // Reset the form fields after successful submission
      setProductData({
        Id: "",
        name: "",
        price: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-black text-white p-8 rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Product</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="Id" className="block mb-2 font-semibold">
            ID:
          </label>
          <input
            type="text"
            id="Id"
            name="Id"
            value={productData.Id}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 font-semibold">
            Price:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="image" className="block mb-2 font-semibold">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
