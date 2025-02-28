import React from "react";

import { FaCaretRight, FaSearch } from "react-icons/fa";

import bg1 from "../assets/images/CAMPO-VIEJO-ROSADO.png";
import bg2 from "../assets/images/Chardundurrga.png";
import logo from "../assets/images/logo.png";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      {/* 404 Content */}
      <div className="relative flex h-[300px] w-full flex-col items-center bg-amber-400 text-center">
        <div className="font-roboto absolute right-100 -bottom-50 text-[450px] text-white">
          404
        </div>
        <div className="font-great-vibes absolute -top-5 left-135 z-20 text-[170px] text-black">
          Lỗi
        </div>
        <div className="z-10 my-auto ml-20 flex flex-col bg-amber-400 px-15 text-lg text-black">
          <span className="font-roboto text-[42px]/[1.1] font-thin uppercase">
            Đây không phải là
          </span>
          <span className="font-great-vibes text-5xl">
            trang web bạn đang tìm kiếm
          </span>
        </div>
      </div>

      {/* Wine Bottles */}
      <div className="relative flex w-full space-x-6">
        <img
          src={bg1}
          alt="Wine Bottle 1"
          className="absolute -bottom-20 left-40 z-20 h-[600px] drop-shadow-lg"
        />
        <img
          src={bg2}
          alt="Wine Bottle 2"
          className="absolute -bottom-12 left-25 z-20 h-[500px] drop-shadow-lg"
        />
      </div>

      {/* Navigation */}
      <div className="absolute bottom-35 flex w-[600px] items-center justify-between">
        <div>
          <img src={logo} alt="Logo" className="h-24" />
        </div>
        <div className="flex items-center space-x-4">
          <span className="group flex items-center justify-center hover:underline">
            <a href="/" className="text-gray-800 group-hover:text-yellow-500">
              TRANG CHỦ
            </a>
            <FaCaretRight className="text-gray-800 group-hover:text-yellow-500" />
          </span>
          <span className="group flex items-center justify-center hover:underline">
            <a
              href="/contact"
              className="text-gray-800 hover:text-yellow-500 hover:underline"
            >
              LIÊN HỆ
            </a>
            <FaCaretRight className="text-gray-800 group-hover:text-yellow-500" />
          </span>
          <div className="ml-1 flex items-center border border-gray-300">
            <button className="rounded-r py-1 pl-2 text-gray-800">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Tìm kiếm ở đây..."
              className="rounded-l border-none py-2 text-xs italic focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
