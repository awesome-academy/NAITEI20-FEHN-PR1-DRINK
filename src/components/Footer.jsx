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
import { Button } from "./ui/button/Button";

const Footer = () => {
  return (
    <footer className="relative bg-white py-10">
      <div className="absolute bottom-50 left-0 w-full border-t border-gray-200 md:bottom-20"></div>
      <div className="container mx-auto px-4 md:px-50">
        {/* Logo Section */}
        <div>
          <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
            <div className="items-center">
              <img src={brand1} alt="Authentic" className="mb-5 h-35" />
            </div>
            <div className="mx-4 hidden h-40 border-l border-gray-200 md:block"></div>
            <div className="flex items-center">
              <img src={brand2} alt="RETROBRAND" className="mb-5 h-35" />
            </div>
            <div className="mx-4 hidden h-40 border-l border-gray-200 md:block"></div>
            <div className="flex items-center">
              <img src={brand3} alt="BEARBRAND" className="mb-5 ml-5 h-35" />
            </div>
          </div>
          <div className="mx-auto w-9/10 justify-center border-t border-gray-200"></div>
        </div>

        {/* Links Section */}
        <div className="mt-15 mb-8 flex flex-col gap-0 space-y-8 px-4 md:grid md:grid-cols-10 md:px-0">
          <div className="md:col-span-2">
            <h3 className="mb-3 text-xl font-medium text-gray-700 uppercase">
              THÔNG TIN
            </h3>
            <ul className="text-sm text-gray-500 uppercase">
              <li className="mb-1 cursor-pointer hover:underline">
                Về chúng tôi
              </li>
              <li className="mb-1 cursor-pointer hover:underline">Giao hàng</li>
              <li className="mb-1 cursor-pointer hover:underline">Cảm nghĩ</li>
              <li className="mb-1 cursor-pointer hover:underline">Lưu trữ</li>
              <li className="mb-1 cursor-pointer hover:underline">
                Chính sách riêng tư
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-3 text-xl font-medium text-gray-700 uppercase">
              Mua hàng
            </h3>
            <ul className="text-sm text-gray-500 uppercase">
              <li className="mb-1 cursor-pointer hover:underline">
                Vận chuyển và tra hàng
              </li>
              <li className="mb-1 cursor-pointer hover:underline">
                Mua hàng an toàn
              </li>
              <li className="mb-1 cursor-pointer hover:underline">
                Vận quốc tế
              </li>
              <li className="mb-1 cursor-pointer hover:underline">Liên kết</li>
              <li className="mb-1 cursor-pointer hover:underline">
                Dịch vụ giảm giá
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-3 text-xl font-medium text-gray-700 uppercase">
              Gửi Email
            </h3>
            <p className="mb-2 text-gray-500">
              Gửi email cho chúng tôi để được hỗ trợ
            </p>
            <div className="mb-4 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-half rounded-none border border-gray-300 px-4 py-1 text-xs text-gray-500 italic outline focus:border-black"
              />
              <Button shape="arrow">Gửi</Button>
            </div>
            <div className="mt-8 flex gap-3 text-gray-400">
              <FaTwitter className="h-auto w-4 cursor-pointer hover:text-yellow-500" />
              <TiSocialGooglePlus className="h-auto w-5 cursor-pointer hover:text-yellow-500" />
              <PiBeachBallLight className="h-auto w-4 cursor-pointer hover:text-yellow-500" />
              <FaLinkedinIn className="h-auto w-4 cursor-pointer hover:text-yellow-500" />
              <FaWifi className="h-auto w-4 cursor-pointer hover:text-yellow-500" />
            </div>
          </div>
          <div className="md:col-span-3">
            <h3 className="mb-3 text-xl font-medium text-gray-700 uppercase">
              Liên hệ
            </h3>
            <div className="mb-2 flex gap-2 text-gray-700">
              <FaMapMarkerAlt className="h-auto w-5" />{" "}
              <span>
                Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Công Vị, Q. Ba
                Đình, Hà Nội
              </span>
            </div>

            <div className="mb-2 flex gap-2 text-gray-700">
              <GiRotaryPhone className="h-auto w-5" />{" "}
              <span>(04) 6674 2332 - </span>
              <GiRotaryPhone className="h-auto w-5" />{" "}
              <span>(04) 3786 8904</span>
            </div>
            <div className="mb-2 flex gap-2 text-gray-700">
              <GiRotaryPhone className="h-auto w-5" />{" "}
              <span>(08) 6680 9686</span>
              <IoMdMail className="ml-2 h-auto w-5" />{" "}
              <a
                href="mailto:Support@bizweb.vn"
                className="text-yellow-500 italic"
              >
                Support@bizweb.vn
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="flex h-full flex-col items-center justify-center space-y-4 text-left text-sm text-gray-500 md:grid md:grid-cols-10">
          <p className="md:col-span-7">© Copyright 2023 Technology JSC</p>
          <div className="flex h-full flex-col gap-5 md:col-span-3 md:flex-row">
            <img src={card1} alt="MasterCard" className="h-3 w-auto md:h-6" />
            <img src={card2} alt="VISA" className="h-3 w-auto md:h-6" />
            <img src={card3} alt="PayPal" className="h-3 w-auto md:h-6" />
            <img src={card4} alt="Maestro" className="h-3 w-auto md:h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
