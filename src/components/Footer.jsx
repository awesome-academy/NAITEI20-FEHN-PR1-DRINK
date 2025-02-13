import React from "react";
import brand1 from "../assets/images/brand1.png";
import brand2 from "../assets/images/brand2.png";
import brand3 from "../assets/images/brand3.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import { PiBeachBallLight } from "react-icons/pi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import card4 from "../assets/images/card4.png";
import { Button } from "./Button";

const Footer = () => {
  return (
    <footer className="bg-white py-10 relative">
      <div className="absolute left-0 top-110 w-full border-t border-gray-200"></div>
      <div className="container mx-auto px-50">
        {/* Logo Section */}
        <div>
          <div className="flex justify-center items-center gap-10">
            <div className="items-center">
              <img src={brand1}  alt="Authentic" className="h-35 mb-5" />
            </div>
            <div className="border-l border-gray-200 h-40 mx-4"></div>
            <div className="flex items-center">
              <img src={brand2} alt="RETROBRAND" className="h-35 mb-5" />
            </div>
            <div className="border-l border-gray-200 h-40 mx-4"></div>
            <div className="flex items-center">
              <img src={brand3}  alt="BEARBRAND" className="h-35 ml-5 mb-5" />
            </div>
          </div>
          <div className="border-t border-gray-200 justify-center w-9/10 mx-auto"></div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-10 gap-0 mt-15 mb-8">
          <div className="col-span-2">
            <h3 className="font-medium text-xl text-gray-700 mb-3 uppercase">THÔNG TIN</h3>
            <ul className="text-gray-500 text-sm uppercase">
              <li className="cursor-pointer hover:underline mb-1">Về chúng tôi</li>
              <li className="cursor-pointer hover:underline mb-1">Giao hàng</li>
              <li className="cursor-pointer hover:underline mb-1">Cảm nghĩ</li>
              <li className="cursor-pointer hover:underline mb-1">Lưu trữ</li>
              <li className="cursor-pointer hover:underline mb-1">Chính sách riêng tư</li>
            </ul>
          </div>
          <div className="col-span-2">
            <h3 className="font-medium text-xl text-gray-700 mb-3 uppercase">Mua hàng</h3>
            <ul className="text-gray-500 text-sm uppercase">
              <li className="cursor-pointer hover:underline mb-1">Vận chuyển và tra hàng</li>
              <li className="cursor-pointer hover:underline mb-1">Mua hàng an toàn</li>
              <li className="cursor-pointer hover:underline mb-1">Vận quốc tế</li>
              <li className="cursor-pointer hover:underline mb-1">Liên kết</li>
              <li className="cursor-pointer hover:underline mb-1">Dịch vụ giảm giá</li>
            </ul>
          </div>
          <div className="col-span-3">
            <h3 className="font-medium text-xl text-gray-700 mb-3 uppercase">Gửi Email</h3>
            <p className="text-gray-500 mb-2">Gửi email cho chúng tôi để được hỗ trợ</p>
            <div className="flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="text-gray-500 italic text-xs border border-gray-300 px-4 py-1 w-half focus:border-black outline rounded-none"
              />
              <Button shape="arrow">Gửi</Button>
            </div>
            <div className="flex text-gray-400 gap-3 mt-8">
              <FaTwitter className="w-4 h-auto hover:text-yellow-500 cursor-pointer"/>
              <TiSocialGooglePlus className="w-5 h-auto hover:text-yellow-500 cursor-pointer"/>
              <PiBeachBallLight className="w-4 h-auto hover:text-yellow-500 cursor-pointer"/>
              <FaLinkedinIn className="w-4 h-auto hover:text-yellow-500 cursor-pointer"/>
              <FaWifi className="w-4 h-auto hover:text-yellow-500 cursor-pointer"/>
            </div>
          </div>
          <div className="col-span-3">
            <h3 className="font-medium text-xl text-gray-700 mb-3 uppercase">Liên hệ</h3>
            <div className="flex gap-2 text-gray-700 mb-2">
              <FaMapMarkerAlt className="w-5 h-auto"/> <span>Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Công Vị, Q. Ba Đình, Hà Nội</span>
            </div>
            
            <div className="flex gap-2 text-gray-700 mb-2">
              <GiRotaryPhone className="w-5 h-auto"/> <span>(04) 6674 2332 - </span>
              <GiRotaryPhone className="w-5 h-auto"/> <span>(04) 3786 8904</span>
            </div>
            <div className="flex gap-2 text-gray-700 mb-2">
              <GiRotaryPhone className="w-5 h-auto"/> <span>(08) 6680 9686</span>
              <IoMdMail className="w-5 h-auto ml-2"/> <a href="mailto:Support@bizweb.vn" className="text-yellow-500 italic">Support@bizweb.vn</a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="grid grid-cols-10 flex text-left text-sm text-gray-500">
          <p className="col-span-7">© Copyright 2023 Technology JSC</p>
          <div className="flex gap-5 col-span-3">
            <img src={card1} alt="MasterCard" className="h-6 w-auto"/>
            <img src={card2} alt="VISA" className="h-6 w-auto"/>
            <img src={card3} alt="PayPal" className="h-6 w-auto"/>
            <img src={card4} alt="Maestro" className="h-6 w-auto"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;