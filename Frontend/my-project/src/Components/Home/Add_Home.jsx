// SO this is the form page made specifically to add the categories to the home page

import React, { useState } from "react";
import axios from "axios";

const Add_Home_Product = () => {
  const [productData, setProductData] = useState({
    Id: "",
    name: "",
    image: "",
    category: "", // Add category to the state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        setProductData({ ...productData, image: base64String });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // This is the route where our data will get added
        "http://localhost:8006/api/home/add",
        productData
      );
      console.log("Product added successfully:", response.data);

      setProductData({
        Id: "",
        name: "",
        price: "",
        image: "",
        category: "", // Reset category after successful submission
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
          <label htmlFor="image" className="block mb-2 font-semibold">
            Image:
          </label>
          <div>
            <label htmlFor="image" className="block mb-2 font-semibold"></label>
            <label
              htmlFor="fileInput"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 cursor-pointer"
            >
              Choose File
            </label>
            <input
              type="file"
              id="fileInput"
              name="image"
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
              required
            />
            {productData.image && (
              <span className="ml-2">{productData.image.name}</span>
            )}
          </div>
        </div>
        {/* Add category input */}
        <div>
          <label htmlFor="category" className="block mb-2 font-semibold">
            Category:
          </label>
          <select
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          >
            <option value="">Select Category</option>
            <option value="keyboard">Keyboard</option>
            <option value="mouse">Mouse</option>
            <option value="monitor">Monitors</option>
            <option value="monitor">Laptops/PCs</option>
            <option value="monitor">Audio</option>
            <option value="monitor">Consoles</option>
            <option value="monitor">Controllers</option>
            <option value="monitor">MousePads</option>
            <option value="monitor">OtherItems</option>

            {/* Add more options as needed */}
          </select>
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

export default Add_Home_Product;
