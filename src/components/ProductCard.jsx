import React from "react";

const ProductCard = ({ imgSrc, productName, price }) => {
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition-transform transform hover:scale-105" >
      <img src={imgSrc} alt={productName} className="w-full h-40 object-cover" />
      <div className="p-2">
        <h2 className="text-gray-800 font-semibold text-lg mb-2">{productName}</h2>
        <p className="text-gray-700 font-normal">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
