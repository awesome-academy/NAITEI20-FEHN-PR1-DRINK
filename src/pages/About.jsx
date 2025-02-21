import React from "react";
import { Link } from "react-router-dom";

import separatorLeft from "../assets/images/titleleft-dark.png";

import bg from "../assets/images/wine-63931_12802-1240x829.jpg";

const About = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-6 bg-white text-gray-500">
      <nav className="container mt-6 px-4 text-sm text-gray-600 md:px-64">
        <Link to="/" className="text-gray-500 hover:text-black">
          Trang chủ
        </Link>{" "}
        /<span className="text-yellow-500"> Giới thiệu</span>
      </nav>
      <div className="container px-4 md:px-64">
        <h1 className="mb-1 text-2xl text-gray-800 uppercase">Giới thiệu</h1>
        <img src={separatorLeft} alt="Separator" className="w-18" />
      </div>
      <div className="container flex w-full flex-col justify-center gap-8 px-4 text-gray-800 md:flex-row md:px-64">
        <div className="md:w-5/11">
          <img src={bg} alt="Product" className="w-full" />
        </div>
        <div className="md:w-6/11">
          <p className="mb-4 text-2xl tracking-wider uppercase">
            CHÀO MỪNG ĐẾN VỚI WINE HOURSE
          </p>
          <div className="text-sm/6">
            Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự
            nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ
            thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được
            đóng chai dung tích 750 ml. Vang nổ Thăng Long có hương vị đặc trưng
            của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy
            trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui
            tươi, sản phẩm được đóng chai dung tích 750 ml. Vang nổ Thăng Long
            có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với
            độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác
            hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750
            ml.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
