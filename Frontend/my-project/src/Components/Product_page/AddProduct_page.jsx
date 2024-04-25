import React, { useState } from "react";
import axios from "axios";

const Add_Product_Page = () => {
  const [productData, setProductData] = useState({
    productId: "",
    name: "",
    description: "",
    image: "",
    price: "",
    category: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
        setProductData({ ...productData, image: base64String }); // Change 'image' to 'images'
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8006/api/product/add",
        productData
      );
      console.log("Product added successfully:", response.data);
      setSuccessMessage("Product has been added.");
      setErrorMessage(""); // Reset error message if any

      setProductData({
        productId: "",
        name: "",
        description: "",
        image: "", // Reset 'images' after successful submission
        price: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      setErrorMessage("Unable to add the product.");
      setSuccessMessage(""); // Reset success message if any
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-black text-white p-8 rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Add Product Page</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {successMessage && (
          <div className="text-green-500 font-semibold">{successMessage}</div>
        )}
        {errorMessage && (
          <div className="text-red-500 font-semibold">{errorMessage}</div>
        )}
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
          <label htmlFor="image" className="block mb-2 font-semibold">
            Images:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-gray-800 text-white"
            accept="image/*"
            required
          />
          {productData.image && (
            <img src={productData.image} alt="Preview" className="mt-2 w-32" />
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
            <option value="Audio">Audio</option>
            <option value="Audio1">Audio1</option>

            <option value="Contollers">Contollers</option>
            <option value="Monitors">Monitors</option>
            <option value="Laptops">Laptops</option>
            <option value="Mice">Mice</option>
            <option value="Mousepads">Mousepads</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Storages">Storages</option>
            <option value="Cameras_&_Lenses">Cameras & Lenses</option>
            <option value="Consoles">Consoles</option>
            <option value="Peripherals ">Peripherals </option>
            <option value="Room_Decor_Cosmetics">Room Decor/Cosmetics</option>
            <option value="PC_Parts">PC Parts</option>
            <option value="Phones">Phones</option>
            <option value="RAM">RAM</option>
            <option value="Other_Items">Other Items</option>
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

// Audio contollers Monitors Mousepads Laptops Keyboards Mouse Storage Cameras/Lenses

// Consoles Peripheral Room Decor/Cosmetics  PCParts RAM Other items
