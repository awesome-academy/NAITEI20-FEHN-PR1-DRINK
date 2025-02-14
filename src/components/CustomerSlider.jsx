import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

import avatar1 from "../assets/images/timthumb (1).jpg";
import avatar2 from "../assets/images/timthumb (2).jpg";
import avatar3 from "../assets/images/timthumb (3).jpg";

const CustomerSlider = () => {
  const items = [
    {
      name: "Giang LT",
      role: "Graphic Design",
      avatar: avatar1,
      comment:
        "Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml.",
    },
    {
      name: "Alex B",
      role: "Developer",
      avatar: avatar2,
      comment:
        "Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml.",
    },
    {
      name: "Sophia C",
      role: "Project Manager",
      avatar: avatar3,
      comment:
        "Vang nổ Thăng Long có hương vị đặc trưng của sản phẩm lên men tự nhiên từ hoa quả với độ rượu nhẹ, bọt ga đầy trắng mịn. Vang Nổ thăng long tạo cảm giác hương phấn, êm dịu, vui tươi, sản phẩm được đóng chai dung tích 750 ml.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-md overflow-hidden">
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-shrink-0 flex-col items-center"
          >
            <div className="px-4 text-center">
              <p className="line-clamp-3 text-xs leading-4 text-gray-600">
                {item.comment}
              </p>
              <p className="text-xs text-gray-300 transition duration-300 group-hover:text-yellow-500">
                Read more
              </p>
            </div>
            <img
              src={item.avatar}
              alt={item.name}
              className="mt-8 h-20 w-20 rounded-lg object-cover"
            />
            <div className="mt-4 text-center">
              <p className="text-sm text-black uppercase">{item.name}</p>
              <p className="text-xs text-gray-500 italic">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        {items.map((_, index) => (
          <button
            key={index}
            className={cn(
              "mx-1 h-1.5 w-1.5 rounded-full",
              currentIndex === index ? "bg-yellow-500" : "bg-gray-400",
            )}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomerSlider;
