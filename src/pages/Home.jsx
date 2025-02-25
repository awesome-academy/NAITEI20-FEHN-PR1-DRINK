import React from "react";
import separator from "../assets/images/title-dark.png";
import separatorLeft from "../assets/images/titleleft-dark.png";
import bg1 from "../assets/images/product.jpg";
import bg2 from "../assets/images/wine-63931_12802-1240x829.jpg";
import bg3 from "../assets/images/47bb1d096966d29c98926a156318c767.jpg";
import bg4 from "../assets/images/thumb.jpg";
import bg5 from "../assets/images/shutterstock_520452046-scaled.jpg";
import bg6 from "../assets/images/slide-2.jpg";
import bg7 from "../assets/images/slide-1-2050x898.jpg";
import bg8 from "../assets/images/slide-3.jpg";
import bg9 from "../assets/images/submenu.jpg";

import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";
import product4 from "../assets/products/4.jpg";
import product5 from "../assets/products/5.jpg";
import product6 from "../assets/products/6.jpg";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.jpg";

import { Button } from "../components/Button";
import BlogCard from "../components/BlogCard";
import ProductSlider from "../components/ProductSlider";
import CustomerSlider from "../components/CustomerSlider";
import PopUp from "../components/PopUp";

import { FaQuoteRight } from "react-icons/fa";
import { blogs } from "../data/dummyData";

const Home = () => {
  const products = [
    {
      tag: "Sale",
      image: product1,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      tag: "Mới",
      image: product2,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      tag: "Hot",
      image: product3,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      image: product4,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      image: product5,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      image: product6,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      image: product7,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
    {
      image: product8,
      name: "RƯỢU VANG ĐÀ LẠT",
      price: 370000,
      oldPrice: 450000,
    },
  ];

  const gridImages = [bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

  return (
    <div className="relative overflow-hidden bg-white text-gray-500">
      <PopUp />
      <div className="absolute inset-0 z-0 flex">
        <img
          src={bg1}
          alt="Product 1"
          className="absolute -top-14.5 -left-3 w-96"
        />
        <img
          src={bg1}
          alt="Product 2"
          className="absolute -top-17 -right-63 w-96 scale-x-[-1]"
        />
      </div>
      <div className="relative z-10 mx-auto flex flex-col items-center justify-between space-y-20 py-20">
        <div className="container flex flex-col items-center justify-center space-y-3 px-64 text-center">
          <div className="text-xl tracking-widest text-black uppercase">
            Giới thiệu
          </div>
          <img src={separator} alt="Separator" className="w-42" />
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            expedita, nostrum recusandae nobis rerum, quas reiciendis corrupti
            cupiditate tempora mollitia alias adipisci est illo hic quod nisi
            excepturi repellat molestias? Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eos perferendis, tempora ipsa, nam
            aliquam blanditiis numquam commodi sit porro assumenda accusantium
            libero suscipit nobis eveniet sint quia. Fugiat, quos. Est. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Esse iste
            tempora placeat ipsum sequi veritatis vero, culpa sit nisi.
            Recusandae et officiis ullam? Id esse, ut adipisci libero nostrum
            numquam.
          </div>
          <Button className="mt-2">Xem thêm</Button>
        </div>
        <div className="relative container flex flex-col items-center justify-center px-64 text-center">
          <img src={bg2} alt="Product" className="w-full" />
          <div className="absolute -bottom-1/2 z-0 flex items-center justify-center">
            <div className="bg-white p-20">
              <div className="relative flex h-[400px] w-[600px] items-center justify-center">
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  <img
                    src={product1}
                    alt="Product 1"
                    className="mx-10 max-h-full max-w-full object-contain"
                  />
                  <div className="absolute top-0 left-0">
                    <div className="relative h-20 w-20">
                      <div className="absolute h-0 w-0 rotate-[90deg] border-t-[60px] border-l-[60px] border-solid border-transparent border-t-white bg-yellow-500"></div>
                      <div className="absolute top-[40px] left-[-35px] h-[2px] w-30 rotate-[-45deg] bg-yellow-500"></div>
                      <span className="absolute top-3 left-2 rotate-[-45deg] text-sm font-bold text-white">
                        Sale
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-96 text-left">
                  <p className="text-xl text-black uppercase">
                    Rượu nho năm 1987
                  </p>
                  <img src={separatorLeft} alt="Separator" className="w-14" />
                  <p className="font-jost mt-5 text-3xl font-light text-yellow-500">
                    330.000<sup>đ</sup>
                  </p>
                  <Button className="mt-5">ADD TO CART</Button>
                  <p className="mt-4 text-xs">
                    Một hợp chất có trong rượu vang được gọi là reservatro có
                    khả năng làm tăng tối đa tuổi thọ. Resveratro còn có khả
                    năng ngăn chặn mật độ ôxy hóa của protein béo.
                  </p>
                  <div className="mt-8 grid grid-cols-2 grid-rows-2 border border-yellow-500 text-3xl font-light text-yellow-500">
                    <div className="border-r border-b border-yellow-500 px-2 py-3 text-center">
                      <div className="font-jost">334</div>
                      <div className="text-sm uppercase">ngày</div>
                    </div>
                    <div className="border-b border-yellow-500 px-2 py-3 text-center">
                      <div className="font-jost">26</div>
                      <div className="text-sm uppercase">giờ</div>
                    </div>
                    <div className="border-r border-yellow-500 px-2 py-3 text-center">
                      <div className="font-jost">60</div>
                      <div className="text-sm uppercase">phút</div>
                    </div>
                    <div className="border-yellow-500 px-2 py-3 text-center">
                      <div className="font-jost">15</div>
                      <div className="text-sm uppercase">giây</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-70 flex flex-col items-center justify-center space-y-3 text-center">
          <div className="text-xl tracking-widest text-black uppercase">
            Sản phẩm mới
          </div>
          <img src={separator} alt="Separator" className="w-42" />
          <ProductSlider products={products} />
        </div>

        <div className="mt-8 grid grid-cols-4 grid-rows-2">
          {gridImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Product ${index + 1}`}
              className="h-58 w-full object-cover transition duration-300 hover:border-4 hover:border-yellow-500"
            />
          ))}
        </div>

        <div className="container mt-8 flex flex-col items-center justify-center space-y-3 text-center">
          <div className="text-xl tracking-widest text-black uppercase">
            Sản phẩm bán chạy
          </div>
          <img src={separator} alt="Separator" className="w-42" />
          <ProductSlider products={products} />
        </div>

        <div className="container mt-8 grid grid-cols-3 gap-6 px-64 text-center">
          <div className="col-span-2 flex flex-col items-center">
            <div className="text-xl tracking-widest text-black uppercase">
              Tin tức & Blog
            </div>
            <img src={separator} alt="Separator" className="w-42" />
            <div className="mt-8 grid grid-cols-2 gap-6">
              {blogs.slice(0, 2).map((blog) => (
                <BlogCard key={blog.id} blog={blog} size="medium" />
              ))}
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div className="text-xl tracking-widest text-black uppercase">
              Khách hàng
            </div>
            <img src={separator} alt="Separator" className="w-42" />
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500">
              <FaQuoteRight className="text-white" />
            </div>
            <div className="mt-4 w-full max-w-sm">
              <CustomerSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
