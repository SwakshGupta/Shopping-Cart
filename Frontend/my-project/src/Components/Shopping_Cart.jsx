import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/Cart";
import { ProductContext } from "../context/context";
import axios from "axios";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { items } = useContext(ProductContext);
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartProducts();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartProducts]);

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8001/api/cart/getall");
      const cartItems = response.data;
      const products = [];

      // Loop through each item in the cart
      for (const item of cartItems) {
        const productData = [];

        // Loop through the product IDs in the item's products array
        for (const productId of item.products) {
          // Find the corresponding product in the product context API
          const product = items.find((product) => product._id === productId);
          if (product) {
            productData.push(product); // Add the product to the productData array
          }
        }

        // Push the productData array for this item into the products array
        products.push(productData);
      }

      setCartProducts(products);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cartProducts.forEach((productData) => {
      productData.forEach((product) => {
        total += product.price;
      });
    });
    setTotalPrice(total);
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.post(`http://localhost:8001/api/cart/delete/${productId}`);

      // Filter out the deleted product from cartItems
      const updatedItems = cartItems.filter(
        (item) => item.products && item.products.includes(productId)
      );
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const proceedToPayment = () => {
    // Implement your logic for proceeding to payment here
    console.log("Proceeding to payment...");
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      <ul className="divide-y divide-gray-300">
        {cartProducts.map((productData, index) => {
          return productData.map((product, idx) => (
            <li key={`${index}-${idx}`} className="py-2 flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-full"
              />
              <div className="ml-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-black"> {` $ ${product.price}`} </p>
              </div>
              <button
                onClick={() => removeFromCart(product._id)}
                className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Remove
              </button>
            </li>
          ));
        })}
      </ul>

      <div className="mt-4">
        <p className="text-xl font-bold">Total Price: ${totalPrice}</p>
        <button
          onClick={proceedToPayment}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;

// here basically we are taking the content out of our context using useContext hook

// if the cart is empty then return null and if cart has items then list it down
