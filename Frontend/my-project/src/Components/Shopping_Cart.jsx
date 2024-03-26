import { useContext } from "react"; // use context hook is use to extract the context

import { Cartcontext } from "../context/context";

const Cart = () => {
  const { items, Setitems } = useContext(Cartcontext);

  if (!Array.isArray(items)) {
    return (
      <div>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2>Welcome to the cart page of the website </h2>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} -{item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Cart;

// here basically we are taking the content out of our context using useContext hook

// if the cart is empty then return null and if cart has items then list it down
