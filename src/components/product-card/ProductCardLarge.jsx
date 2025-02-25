import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { FaHeart } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { useCart } from "../../context/CartContext.jsx"; 

const ProductCardLarge = ({id, image, name, price, description }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (id) {
      navigate(`/products/${id}`);
    } else {
      console.error("Product ID is undefined");
    }
  };

  const { addToCart } = useCart(); // Lấy hàm addToCart từ context

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, name, image, price });
  };
  return (
    <div 
      className="flex w-160 p-4 gap-5 bg-white group" 
      onClick={handleClick}
      data-id={id}
    >
      {/* Product Image */}
      <div className="w-50 h-70 flex justify-center items-center overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={name}
          className="max-h-full p-4 max-w-full object-cover"
        />
      </div>
      <div className="w-96">
        {/* Product Info */}
        <div className="text-left">
          <p className="text-xl font-medium text-gray-800 group-hover:text-yellow-500 uppercase">{name}</p>
          <div className="mt-1">
            <span className="font-serif text-4xl text-yellow-500">
              {price.toLocaleString()}đ
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">{description}</p>
        </div>
        {/* Button */}
        <div className="flex gap-5 items-center mt-5">
          <Button onClick={handleAddToCart}>ADD TO CART</Button>
          <div className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
            <FaHeart /> <span className="text-xs">Yêu thích</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer text-gray-500 hover:text-black">
            <SiGoogleanalytics /> <span className="text-xs">So sánh</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLarge;
