import React from "react";
import { FaLink } from "react-icons/fa";
import thumb from "../assets/images/thumb.jpg";

const BlogCard = () => {
  return (
    <div className="group relative max-w-sm overflow-hidden">
      <div className="relative">
        <img className="w-full" src={thumb} alt="Thumb" />

        {/* Triangle Overlay */}
        <div className="clip-path-triangle absolute inset-0 transition duration-300 group-hover:bg-white/30"></div>

        {/* Icon Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <FaLink className="size-3 rotate-90 text-black" />
            </div>
          </div>
        </div>
      </div>

      <div className="py-2 text-left">
        <div className="hover mb-1 text-base tracking-wider text-black uppercase transition duration-300 group-hover:text-yellow-500">
          Vang Thăng Long Classic
        </div>
        <p className="mb-1 text-xs text-gray-300">
          Đăng bởi Duong | 12/02/2025 | 60 bình luận
        </p>
        <p className="line-clamp-4 text-xs leading-4 text-gray-600">
          Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên
          từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long
          tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai
          dung tích 750 ml.
        </p>
        <p className="text-xs text-gray-300 transition duration-300 group-hover:text-yellow-500">
          Read more
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
