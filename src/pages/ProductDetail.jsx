import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { FaStar, FaRegStar } from "react-icons/fa";
import { FaHeart, FaSignal, FaEnvelope } from "react-icons/fa";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

import { Button } from "../components/ui/button/Button";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import separator from "../assets/images/title-dark.png";
import separatorLeft from "../assets/images/titleleft-dark.png";

import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";
import product4 from "../assets/products/4.jpg";
import product5 from "../assets/products/5.jpg";
import product6 from "../assets/products/6.jpg";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.jpg";
import bg from "../assets/images/submenu.jpg";

import { cn } from "../lib/utils";
import ProductSlider from "../components/ProductSlider";
import { products as dummyProducts } from "../data/dummyData";

const ProductPage = () => {
  const { id } = useParams();
  const product = {
    ...dummyProducts.find((p) => p.id === parseInt(id)),
    colors: ["#e4af49", "#030102", "#9c0001"],
    sizes: ["Loại to", "Loại vừa", "Loại nhỏ"],
  };
  const products = dummyProducts
    .filter((p) => p.id !== parseInt(id))
    .slice(0, 8);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const tabContent = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula, arcu sit amet dictum convallis, nisi elit tincidunt ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximexpedita, nostrum recusandae nobis rerum, quas reiciendis corrupticupiditate tempora mollitia alias adipisci est illo hic quod nisiexcepturi repellat molestias? Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximexpedita, nostrum recusandae nobis rerum, quas reiciendis corrupticupiditate tempora mollitia alias adipisci est illo hic quod nisiexcepturi repellat molestias? Lorem ipsum dolor sit amet",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximexpedita, nostrum recusandae nobis rerum, quas reiciendis corrupticupiditate tempora mollitia alias adipisci est illo hic quod nisiexcepturi repellat molestias? Lorem ipsum dolor sit amet",
  ];
  const images = [product.image, ...products.map((p) => p.image)];
  const [mainImage, setMainImage] = useState(images[2]);
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleScrollUp = () => {
    if (visibleIndex > 0) setVisibleIndex(visibleIndex - 1);
  };

  const handleScrollDown = () => {
    if (visibleIndex < images.length - 5) setVisibleIndex(visibleIndex + 1);
  };

  const renderStarRating = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < product.rating) {
        stars.push(<FaStar key={i} className="size-3" />);
      } else {
        stars.push(<FaRegStar key={i} className="size-3" />);
      }
    }
    return stars;
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-6 bg-white text-gray-500">
      <nav className="container mt-6 px-4 text-sm text-gray-600 md:px-64">
        <Link to="/" className="text-gray-500 hover:text-black">
          Trang chủ
        </Link>{" "}
        /
        <Link to="/products" className="text-gray-500 hover:text-black">
          {" "}
          Sản phẩm
        </Link>{" "}
        /<span className="text-yellow-500"> Rượu vang đỏ</span>
      </nav>
      <div className="container flex flex-col gap-6 px-4 md:flex-row md:px-64">
        <div className="flex gap-2 border border-gray-200">
          <div className="flex flex-col items-center space-y-2 border-r border-gray-200 px-2 py-4">
            <button
              onClick={handleScrollUp}
              className="p-2 hover:text-yellow-500"
            >
              <IoMdArrowUp size={20} />
            </button>
            <div className="flex h-[430px] flex-col gap-2 overflow-hidden transition-transform duration-300">
              {images
                .slice(visibleIndex, visibleIndex + 5)
                .map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt="wine"
                    className={`h-20 w-16 cursor-pointer border-2 ${mainImage === img ? "border-yellow-500" : "border-transparent"}`}
                    onClick={() => setMainImage(img)}
                  />
                ))}
            </div>
            <button
              onClick={handleScrollDown}
              className="p-2 hover:text-yellow-500"
            >
              <IoMdArrowDown size={20} />
            </button>
          </div>
          <img
            src={mainImage}
            alt="wine"
            className="w-full object-contain md:w-96"
          />
        </div>

        <div className="flex-1">
          <p className="text-xl text-black uppercase">{product.name}</p>
          <img src={separatorLeft} alt="Separator" className="w-14" />
          <p className="font-jost mt-3 text-3xl font-light text-yellow-500">
            {product.price.toLocaleString("vi-VN")}
            <sup>đ</sup>
          </p>
          <div className="mt-1 flex items-center gap-1 border-t border-b border-gray-300 py-3 text-gray-600">
            {renderStarRating()}
            <span className="ml-2 text-xs">
              {product.reviews} Review(s) | Add Your Review
            </span>
          </div>

          <div className="mt-4">
            <p className="mb-2">MÀU SẮC</p>
            <div className="flex gap-2">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={cn(
                    "h-6 w-6 cursor-pointer",
                    selectedColor === color
                      ? "ring-1 ring-black ring-offset-1"
                      : "",
                  )}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-4">
            <p className="mb-2 text-gray-600">KÍCH CỠ</p>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-28 border border-gray-300 py-1 pr-6 pl-1 text-sm"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          {/* Quantity */}
          <div className="mt-4 flex flex-col">
            <p className="mb-2 text-gray-600">SỐ LƯỢNG</p>
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <span className="flex h-7 w-28 items-center border-2 border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-7 bg-gray-200 px-2"
                >
                  <FaMinus className="size-3" />
                </button>
                <span className="px-6">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-7 bg-gray-200 px-2"
                >
                  <FaPlus className="size-3" />
                </button>
              </span>
              <Button className="my-4 px-10 py-5 text-sm md:my-0 md:px-4 md:py-0.5 md:text-xs">
                ADD TO CART
              </Button>
            </div>
          </div>

          {/* Favourite, Compare, Email */}
          <div className="mt-6 flex gap-4 text-gray-500">
            <div className="flex cursor-pointer items-center gap-2 hover:text-yellow-500">
              <FaHeart /> <span className="text-xs">Yêu thích</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 hover:text-yellow-500">
              <FaSignal /> <span className="text-xs">So sánh</span>
            </div>
            <div className="flex cursor-pointer items-center gap-2 hover:text-yellow-500">
              <FaEnvelope className="cursor-pointer" />
              <span className="text-xs"> Email</span>
            </div>
          </div>

          {/* Description */}
          <div className="mt-4 flex flex-col">
            <p className="mb-2 text-gray-600">MÔ TẢ</p>
            <p className="text-xs">
              Một hợp chất có trong rượu vang được gọi là resveratro có khả năng
              làm tăng tuổi thọ. Resveratro còn có khả năng ngăn chặn mật độ oxy
              hóa của protein béo.
            </p>
          </div>

          <div className="mt-4 flex">
            <FacebookShareButton url={window.location.href}>
              <FacebookIcon size={24} />
            </FacebookShareButton>
            <TwitterShareButton url={window.location.href}>
              <TwitterIcon size={24} />
            </TwitterShareButton>
            <LinkedinShareButton url={window.location.href}>
              <LinkedinIcon size={24} />
            </LinkedinShareButton>
            <PinterestShareButton url={window.location.href}>
              <PinterestIcon size={24} />
            </PinterestShareButton>
          </div>
        </div>
      </div>
      <div className="container mt-6 flex flex-col justify-between gap-8 px-4 md:flex-row md:px-64">
        <div className="flex w-full gap-6 md:w-2/3">
          {/* Tabs */}
          <div className="flex w-full flex-col">
            <div className="flex text-sm md:text-base">
              <button
                onClick={() => setActiveTab(0)}
                className={cn(
                  "w-1/3 px-4 py-1 tracking-wider uppercase md:w-fit",
                  activeTab === 0
                    ? "bg-yellow-500 text-white"
                    : "text-gray-500",
                )}
              >
                Đặc điểm nổi bật
              </button>
              <button
                onClick={() => setActiveTab(1)}
                className={cn(
                  "w-1/3 px-4 py-1 tracking-wider uppercase md:w-fit",
                  activeTab === 1
                    ? "bg-yellow-500 text-white"
                    : "text-gray-500",
                )}
              >
                Thông tin sản phẩm
              </button>
              <button
                onClick={() => setActiveTab(2)}
                className={cn(
                  "w-1/3 px-4 py-1 tracking-wider uppercase md:w-fit",
                  activeTab === 2
                    ? "bg-yellow-500 text-white"
                    : "text-gray-500",
                )}
              >
                Đánh giá
              </button>
            </div>

            {/* Tab Content */}
            <div className="mt-4 text-sm text-gray-600">
              <p>{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>
        <div className="relative h-40 w-full md:w-1/3">
          <img
            src={bg}
            alt="Product Image"
            className="h-full w-full object-cover"
          />
          <div className="bg-opacity-50 absolute top-0 left-0 flex h-full w-full items-center justify-center">
            <p className="text-4xl font-thin text-white">RƯỢU NHO</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 flex flex-col items-center justify-center space-y-3 text-center">
        <div className="text-xl tracking-widest text-black uppercase">
          Sản phẩm liên quan
        </div>
        <img src={separator} alt="Separator" className="w-42" />
        <ProductSlider products={products} />
      </div>
    </div>
  );
};

export default ProductPage;
