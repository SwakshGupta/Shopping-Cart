import React, { useState } from "react";
import axios from "axios";

const Add_Product_Page = () => {
  const [productData, setProductData] = useState({
    productId: "",
    name: "",
    description: "",
    images: "", // Keep 'images' instead of 'image'
    price: "",
    category: "",
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
        setProductData({ ...productData, images: base64String }); // Change 'image' to 'images'
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8006/api/productpage/add",
        productData
      );
      console.log("Product added successfully:", response.data);

      setProductData({
        productId: "",
        name: "",
        description: "",
        images: "", // Reset 'images' after successful submission
        price: "",
        category: "",
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
          <label htmlFor="productId" className="block mb-2 font-semibold">
            Product ID:
          </label>
          <input
            type="text"
            id="productId"
            name="productId"
            value={productData.productId}
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
          <label htmlFor="description" className="block mb-2 font-semibold">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="price" className="block mb-2 font-semibold">
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            required
          />
        </div>
        <div>
          <label htmlFor="images" className="block mb-2 font-semibold">
            Images:
          </label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            accept="image/*"
            required
          />
          {productData.images && (
            <img src={productData.images} alt="Preview" className="mt-2 w-32" />
          )}
        </div>
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
            <option value="Laptop/Pcs">Laptops/PCs</option>
            <option value="Audio">Audio</option>
            <option value="Consoles">Consoles</option>
            <option value="Controllers">Controllers</option>
            <option value="MousePads">MousePads</option>
            <option value="Phone">Phone</option>
            <option value="Speakers">Speakers</option>
            <option value="GamingBag">GamingBag</option>
            <option value="OtherItems">OtherItems</option>
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

export default Add_Product_Page;
