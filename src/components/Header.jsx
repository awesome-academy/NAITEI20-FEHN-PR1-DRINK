import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import submenu from "../assets/images/submenu.jpg";

const Header = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${encodeURIComponent(category)}`);
  };

  return (
    <header>
      <div className="border-b border-gray-200 bg-white text-gray-400">
        <div className="container mx-auto flex items-center justify-between px-64">
          <nav>
            <ul className="flex space-x-2 text-xs">
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Tài khoản của tôi
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Trạng thái đơn hàng
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Danh sách ưa thích
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Giỏ hàng
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Đăng nhập
                </a>
              </li>
              <li className="text-gray-400">-</li>
              <li>
                <a href="#" className="hover:text-yellow-500 hover:underline">
                  Đăng ký
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm ở đây..."
              className="rounded-l border-none px-2 py-2 text-xs italic focus:outline-none"
            />
            <button className="rounded-r px-4 py-1 text-gray-400">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-black text-white">
        <div className="container mx-auto flex items-center justify-between px-64">
          <div className="flex flex-col items-center justify-center py-2 text-2xl font-bold text-yellow-500">
            <img src={logo} alt="Logo" className="h-24" />
          </div>

          <nav className="h-28">
            <ul className="flex h-full space-x-8 text-xs">
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="/" className="tracking-wider uppercase">
                  Trang chủ
                </a>
              </li>
              <li className="group relative flex h-full items-center hover:text-yellow-500">
                <a href="/products" className="tracking-wider uppercase">
                  Rượu vang đỏ
                </a>
                {/* Submenu with 5-column grid */}
                <div className="absolute top-full -left-40 z-20 hidden w-[800px] grid-cols-5 gap-4 border border-yellow-500 bg-white p-6 text-black group-hover:grid">
                  {/* Category Columns (3 columns) */}
                  <div>
                    <h3 className="mb-2 font-bold uppercase">Rượu ngoại</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Rượu Chivas")}>
                        Rượu Chivas
                      </li>
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Hàng độc - Rượu độc đáo")}>
                        Hàng độc - Rượu độc đáo
                      </li>
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Johnnie Walker")}>
                        Johnnie Walker
                      </li>
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Rượu Whisky")}>
                        Rượu Whisky
                      </li>
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Rượu Remy Martin")}>
                        Rượu Remy Martin
                      </li>
                      <li className="hover:text-yellow-500 cursor-pointer" onClick={() => handleCategoryClick("Rượu Glenmorangie")}>
                        Rượu Glenmorangie
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold uppercase">Rượu vang</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Chivas</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Hàng độc - Rượu độc đáo</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Johnnie Walker</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Whisky</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Remy Martin</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Glenmorangie</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-bold uppercase">Rượu ngoại</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Chivas</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Hàng độc - Rượu độc đáo</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Johnnie Walker</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Whisky</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Remy Martin</a>
                      </li>
                      <li className="hover:text-yellow-500">
                        <a href="#">Rượu Glenmorangie</a>
                      </li>
                    </ul>
                  </div>

                  {/* Image Columns (col-span-2) */}
                  <div className="col-span-2 flex flex-col items-center">
                    <img
                      src={submenu}
                      alt="Submenu"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                </div>
                {/* Triangle */}
                <div className="absolute bottom-0 left-1/2 h-0 w-0 -translate-x-1/2 transform border-r-8 border-b-8 border-l-8 border-r-transparent border-b-yellow-500 border-l-transparent opacity-0 group-hover:opacity-100"></div>
              </li>
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Rượu trắng
                </a>
              </li>
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Champagne
                </a>
              </li>
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Thông tin
                </a>
              </li>
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="/blogs" className="tracking-wider uppercase">
                  Blog
                </a>
              </li>
              <li className="flex h-full items-center hover:text-yellow-500">
                <a href="#" className="tracking-wider uppercase">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
