import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLink, FaCalendarAlt } from "react-icons/fa";

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={`text-gray-500 italic leading-6 ${isExpanded ? "" : "line-clamp-8"}`}>
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-yellow-500 cursor-pointer"
      >
        {isExpanded ? "Show less" : "Read more"}
      </button>
    </div>
  );
};

const BlogCard = ({ blog, size = "medium" }) => {
  if (!blog) return null;

  const validSizes = ["small", "medium", "large"];

  if (!validSizes.includes(size)) {
    size = "medium";
  }

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/blog/${blog.id}`);
  };

  if (size === "small") {
    return (
      <div className="group flex w-64 text-sm cursor-pointer" onClick={handleNavigate}>
        <div className="relative flex-1">
          <img className="w-28 h-18" src={blog.image} alt="Thumb" />
          <div className="clip-path-triangle absolute inset-0 transition duration-300 group-hover:bg-white/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white">
                <FaLink className="rotate-90 text-black" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-2 ml-4 text-left">
          <h3 className="uppercase mb-2 tracking-wider text-black line-clamp-2 group-hover:text-yellow-500">
            {blog.title}
          </h3>
          <p className="flex items-center text-gray-300">
            <FaCalendarAlt className="mr-2" /> {blog.date}
          </p>
        </div>
      </div>
    );
  }

  if (size === "medium") {
    return (
      <div className="group relative max-w-sm overflow-hidden" onClick={handleNavigate}>
        <div className="relative cursor-pointer">
          <img className="w-full h-60 object-cover" src={blog.image} alt="Thumb" />
          <div className="clip-path-triangle absolute inset-0 transition duration-300 group-hover:bg-white/30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="opacity-0 transition duration-300 group-hover:opacity-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <FaLink className="rotate-90 text-black" />
              </div>
            </div>
          </div>
        </div>

        <div className="py-2 text-left">
          <div className="hover mb-1 text-xl tracking-wider text-black uppercase transition duration-300 cursor-pointer group-hover:text-yellow-500 line-clamp-1">
            {blog.title}
          </div>
          <p className="mb-1 text-gray-300">
            Đăng bởi {blog.author} | {blog.date} | {blog.commentsCount} bình luận
          </p>
          <p className="line-clamp-4 text-base leading-6 text-gray-600">
            {blog.description}
          </p>
          <p className="cursor-pointer text-yellow-500">Read more</p>
        </div>
      </div>
    );
  }

  if (size === "large") {
    return (
      <div className="w-200 text-lg group relative overflow-hidden">
        <div className="relative">
          <img className="w-full h-120 object-cover" src={blog.image} alt="Thumb" />
        </div>
        <div className="my-8 text-left">
          <h3 className="text-3xl my-4 uppercase tracking-wider text-black">
            {blog.title}
          </h3>
          <p className="my-4 text-xl text-gray-300">
            Đăng bởi {blog.author} | {blog.date} | {blog.commentsCount} bình luận
          </p>
          <ExpandableText text={blog.description} />
        </div>
      </div>
    );
  }

  return null;
};

export default BlogCard;
