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
        await axios.post(
          "http://localhost:8001/api/product/add",
          props.product
        );
        console.log("Product added to database successfully.");

        const response = await axios.get(
          "http://localhost:8001/api/product/getall"
        );
        setitems(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = () => {
    const newItem = {
      productId: props.product.id,
      name: props.product.name,
      price: props.product.price,
      image: props.product.image,
    };

    setCartItems([...cartItems, newItem]); // here the items which we get from the props and added into the context api with the help of spread out operator
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md bg-white p-4 m-4">
      <img className="w-full" src={items.image} alt={items.image} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{items.name}</h2>
        <p className="text-gray-700 text-base">{`Price: ${items.price}`}</p>
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
  );
};

export default Item;

// The product will be listed on the main screen in the form of card with a button

// when the button is clicked  the data is saved in the context
