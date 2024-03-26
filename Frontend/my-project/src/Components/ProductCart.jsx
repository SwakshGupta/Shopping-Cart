import React, { useContext } from "react";
import { Cartcontext } from "../context/context";

const Item = (props) => {
  const { items, Setitems } = useContext(Cartcontext);

  const handleAddtoCart = async () => {
    try {
      const newItem = {
        name: props.product.name,
        price: props.product.price,
        image: props.product.image,
      };

      await axios.post("http://localhost:8001/api/cart/add", newItem);

      Setitems([...items, newItem]);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md bg-white p-4 m-4">
      <img
        className="w-full"
        src={props.product.image}
        alt={props.product.name}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{props.product.name}</h2>
        <p className="text-gray-700 text-base">{`Price: ${props.product.price}`}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={handleAddtoCart}
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
