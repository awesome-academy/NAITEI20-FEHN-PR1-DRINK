import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLink, FaCalendarAlt } from "react-icons/fa";

const ExpandableText = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p
        className={`italic leading-6 text-gray-500 ${isExpanded ? "" : "line-clamp-8"}`}
      >
        {text}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 cursor-pointer text-yellow-500"
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
      <div
        className="group flex w-64 cursor-pointer text-sm"
        onClick={handleNavigate}
      >
        <div className="relative flex-1">
          <img className="h-18 w-28" src={blog.image} alt="Thumb" />
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
          <h3 className="mb-2 line-clamp-2 uppercase tracking-wider text-black group-hover:text-yellow-500">
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
      <div
        className="group relative max-w-sm overflow-hidden"
        onClick={handleNavigate}
      >
        <div className="relative cursor-pointer">
          <img
            className="h-60 w-full object-cover"
            src={blog.image}
            alt="Thumb"
          />
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
          <div className="hover mb-1 line-clamp-1 cursor-pointer text-xl uppercase tracking-wider text-black transition duration-300 group-hover:text-yellow-500">
            {blog.title}
          </div>
          <p className="mb-1 text-gray-300">
            Đăng bởi {blog.author} | {blog.date} | {blog.commentsCount} bình
            luận
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
      <div className="w-200 group relative overflow-hidden text-lg">
        <div className="relative">
          <img
            className="h-120 w-full object-cover"
            src={blog.image}
            alt="Thumb"
          />
        </div>
        <div className="my-8 text-left">
          <h3 className="my-4 text-3xl uppercase tracking-wider text-black">
            {blog.title}
          </h3>
          <p className="my-4 text-xl text-gray-300">
            Đăng bởi {blog.author} | {blog.date} | {blog.commentsCount} bình
            luận
          </p>
          <ExpandableText text={blog.description} />
        </div>
      </div>
    );
  }

  return null;
};

export default BlogCard;
