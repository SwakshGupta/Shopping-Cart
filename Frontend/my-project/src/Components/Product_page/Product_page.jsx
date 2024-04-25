import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { category1, name } = useParams(); // Get category and name from URL params
  const { cartItems, setCartItems, searchQuery } = useContext(CartContext);
  const [loading, setLoading] = useState(true); // State to manage loading

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8006/api/product/getall`
        );
        // Find the product based on category and name
        const foundProduct = response.data.find(
          (product) =>
            product.category.toLowerCase() === category1.toLowerCase() &&
            product.name.toLowerCase() === name.toLowerCase()
        );
        setProduct(foundProduct);
        setLoading(false); // Set loading to false after product is fetched
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchProduct();
  }, [category1, name]); // Re-fetch product when category or name change

  const handleAddToCart = (event, product) => {
    // Prevent the default action of the button click (e.g., form submission)
    event.preventDefault();

    // Prevent the click event from bubbling up to the parent container
    event.stopPropagation();

    const cartData = {
      products: [
        {
          productId: product._id,
        },
      ],
    };

    axios
      .post("http://localhost:8006/api/cart/add", cartData)
      .then((response) => {
        console.log("Item added to cart successfully:", response.data);
        setCartItems([...cartItems, product]);
        // Notify user
        toast.success("Product added to wishlist!");
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  // Render loading spinner if product is still loading
  if (loading) {
    return (
      <div className="container mx-auto mt-8 flex justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-l-4 border-gray-800"></div>
      </div>
    );
  }

  // Render product once it's loaded
  return (
    <>
      <ToastContainer />
      <div className="bg-gray-100">
        <div className="max-w-full mx-auto bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-6xl font-bold mb-8 md:mb-20">{product.name}</h1>
            <p className="text-4xl font-semibold mb-8 md:mb-7">
              ₹{product.price}
            </p>
            <div className="border-b border-gray-300 mb-8 pb-8">
              <p className="text-lg mb-4">{product.description}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={(event) => handleAddToCart(event, product)}
                className="bg-black hover:bg-lime-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mr-4"
              >
                Add to Wishlist
              </button>
              <a
                href="https://wa.me/917358781871"
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
    </>
  );
};

export default ProductPage;
