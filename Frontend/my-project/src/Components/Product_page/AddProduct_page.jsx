import React, { useState } from "react";
import axios from "axios";

const Add_Product_Page = () => {
  const [productData, setProductData] = useState({
    productId: "", // Changed Id to productId
    title: "",
    description: "",
    images: [],
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;

    if (files) {
      const imageArray = Array.from(files).map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      }));
      setProductData({ ...productData, images: imageArray });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("productId", productData.productId); // Changed Id to productId
      formData.append("title", productData.title);
      formData.append("description", productData.description);
      formData.append("price", productData.price);
      productData.images.forEach((image) => {
        formData.append("images", image.file);
      });

      const response = await axios.post(
        "http://localhost:8006/api/productpage/add",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Product added successfully:", response.data);

      setProductData({
        productId: "", // Reset productId
        title: "",
        description: "",
        images: [],
        price: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-8 bg-black text-white p-8 rounded-md">
      <h1 className="text-3xl font-bold mb-8 text-center"> Product Page</h1>
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
          <label htmlFor="title" className="block mb-2 font-semibold">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={productData.title}
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
            multiple
            accept="image/*"
            required
          />
          {productData.images.map((image, index) => (
            <img
              key={index}
              src={image.preview}
              alt={`Preview ${index}`}
              className="mt-2 w-32"
            />
          ))}
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
