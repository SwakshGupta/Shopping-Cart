import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ProductContext } from "../context/context";
import { CartContext } from "../context/Cart";

const Item = (props) => {
  const { items, setitems } = useContext(ProductContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8001/api/product/getall"
        );
        setitems(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError(error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      productId: props.product.Id,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image,
    };

    // Send the new item to the backend
    axios
      .post("http://localhost:8001/api/cart/add", newItem)
      .then((response) => {
        console.log("Item added to cart successfully:", response.data);
        // Update the local cartItems state
        setCartItems([...cartItems, newItem]);
      })
      .catch((error) => {
        console.error("Error adding item to cart:", error);
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.Id}
          className="max-w-xs rounded overflow-hidden shadow-md bg-white p-4 m-4"
        >
          <img className="w-full" src={item.image} alt={item.name} />
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{item.name}</h2>
            <p className="text-gray-700 text-base">{`Price: ${item.price}`}</p>
          </div>
          <div className="px-6 py-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;

// The product will be listed on the main screen in the form of card with a button

// when the button is clicked  the data is saved in the context
