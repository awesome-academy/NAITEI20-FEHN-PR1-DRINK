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
    <div className="group relative flex w-60 flex-col items-center justify-center overflow-hidden bg-white p-2">
      {tag && (
        <div className="absolute top-0 left-0 z-20">
          <div className="relative h-20 w-20">
            <div
              className={`absolute h-0 w-0 border-t-[60px] border-l-[60px] border-solid border-transparent ${tagColors[tag]} rotate-[90deg] border-t-white`}
            ></div>
            <div
              className={`absolute top-[40px] left-[-35px] h-[2px] w-30 ${tagColors[tag]} rotate-[-45deg]`}
            ></div>
            <span className="absolute top-3 left-2 rotate-[-45deg] text-sm font-bold text-white">
              {tag}
            </span>
          </div>
        </div>
      )}

      {/* Product Image */}
      <div className="relative mt-2 flex h-60 w-full items-center justify-center overflow-hidden">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-contain"
        />
        {/* Hover actions */}
        <div className="bg-opacity-80 absolute bottom-0 left-0 flex w-full items-center justify-around bg-black py-2 text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex cursor-pointer items-center gap-2 hover:text-white">
            <FaHeart /> <span className="text-xs">Yêu thích</span>
          </div>
          <div className="flex cursor-pointer items-center gap-2 hover:text-white">
            <SiGoogleanalytics /> <span className="text-xs">So sánh</span>
          </div>
          <BsArrowsAngleContract className="cursor-pointer hover:text-white" />
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-2 text-center">
        <p className="text-sm font-medium text-gray-800 transition-colors duration-300 group-hover:text-yellow-500">
          {name}
        </p>
        <div className="mt-1">
          <span className="text-lg text-yellow-500">
            {price.toLocaleString()}đ
          </span>
          {oldPrice && (
            <span className="ml-2 text-gray-400 line-through">
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
