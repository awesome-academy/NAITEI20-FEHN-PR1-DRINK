import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Pagination from "../components/Pagination";
import { blogs } from "../data/dummyData";
import arrow from "../assets/images/arrow.png";

const BlogList = () => {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastBlog = currentPage * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          / <span className="text-yellow-500">Blog</span>
        </nav>
        <p className="uppercase text-black text-2xl mb-2">Blog</p>
        <img src={arrow} alt=" " />
      </div>
      
      {/* Grid hiển thị blog */}
      <div className="grid grid-cols-3 gap-6 space-y-2">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} size="medium" />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex justify-center">
        <Pagination
          totalItems={blogs.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default BlogList;
