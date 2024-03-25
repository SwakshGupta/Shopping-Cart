import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-md bg-white">
      <img
        className="w-full rounded-t"
        src={product.image}
        alt={product.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">{product.price}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-blue-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded-full">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
