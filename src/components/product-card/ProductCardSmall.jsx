import React from "react";
import { Button } from "../Button";
import { FaHeart } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { BsArrowsAngleContract } from "react-icons/bs";

const tagColors = {
  Sale: "bg-yellow-500",
  Mới: "bg-green-500",
  Hot: "bg-red-500",
};

const ProductCardSmall = ({ tag, image, name, price, oldPrice }) => {
  return (
    <div className="relative w-60 p-2 bg-white overflow-hidden group">
      {tag && (
        <div className="absolute top-0 left-0">
          <div className="relative w-20 h-20">
            <div
              className={`absolute w-0 h-0 border-l-[60px] border-t-[60px] border-solid border-transparent ${tagColors[tag]} border-t-white rotate-[90deg]`}
            ></div>
            <div className={`absolute w-30 h-[2px] top-[40px] left-[-35px] ${tagColors[tag]} rotate-[-45deg]`}></div>
            <span className="absolute top-3 left-2 text-white text-sm font-bold rotate-[-45deg]">
              {tag}
            </span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="w-full h-60 flex justify-center items-center mt-2 overflow-hidden relative cursor-pointer">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
        {/* Hover actions */}
        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-80 text-gray-400 flex justify-around items-center py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center gap-2 cursor-pointer hover:text-white">
            <FaHeart /> <span className="text-xs">Yêu thích</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:text-white">
            <SiGoogleanalytics /> <span className="text-xs">So sánh</span>
          </div>
          <BsArrowsAngleContract className="cursor-pointer hover:text-white"/>
        </div>
      </div>

      {/* Product Info */}
      <div className="text-center mt-4">
        <p className="text-sm font-medium text-gray-800 group-hover:text-yellow-500 transition-colors duration-300 cursor-pointer">
          {name}
        </p>
        <div className="mt-1">
          <span className="text-lg text-yellow-500">
            {price.toLocaleString()}đ
          </span>
          {oldPrice && (
            <span className="text-gray-400 line-through ml-2">
              {oldPrice.toLocaleString()}đ
            </span>
          )}
        </div>
      </div>

      <Button className="mt-4">ADD TO CART</Button>
    </div>
  );
};

export default ProductCardSmall;
