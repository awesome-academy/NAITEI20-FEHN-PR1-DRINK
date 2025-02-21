import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { FaHeart } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

const ProductCardLarge = ({ id, image, name, price, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (id) {
      navigate(`/products/${id}`);
    } else {
      console.error("Product ID is undefined");
    }
  };

  return (
    <div
      className="group mb-2 flex w-full gap-5 bg-white p-1 md:w-160 md:p-4"
      onClick={handleClick}
      data-id={id}
    >
      {/* Product Image */}
      <div className="flex h-40 w-50 cursor-pointer justify-center overflow-hidden md:h-70">
        <img
          src={image}
          alt={name}
          className="max-h-full max-w-full object-cover md:p-4"
        />
      </div>
      <div className="w-7/10 md:w-96">
        {/* Product Info */}
        <div className="text-left">
          <p className="truncate text-base font-medium text-gray-800 uppercase group-hover:text-yellow-500 md:text-xl">
            {name}
          </p>
          <div className="mt-1">
            <span className="font-serif text-lg text-yellow-500 md:text-4xl">
              {price.toLocaleString()}đ
            </span>
          </div>
          <p className="mt-2 line-clamp-3 text-xs text-gray-600 md:text-sm">
            {description}
          </p>
        </div>
        {/* Button */}
        <div className="mt-5 flex flex-col items-center gap-5 md:flex-row">
          <Button
            className="hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            ADD TO CART
          </Button>
          <div className="flex gap-2">
            <div className="flex cursor-pointer items-center gap-2 text-gray-500 hover:text-black">
              <FaHeart /> <span className="text-xs">Yêu thích</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 text-gray-500 hover:text-black">
              <SiGoogleanalytics /> <span className="text-xs">So sánh</span>
            </div>
          </div>
          <Button className="block w-full md:hidden">ADD TO CART</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardLarge;
