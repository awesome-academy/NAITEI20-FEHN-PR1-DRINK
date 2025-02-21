import React, { useState } from "react";
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
    <div className="container mx-auto px-4 md:px-64">
      <div className="my-6">
        <p className="mb-4 text-sm text-gray-600">
          Trang chủ / <span className="text-yellow-500">Blog</span>
        </p>
      </div>
      <p className="pb-2 text-2xl font-medium text-gray-700 uppercase">Blog</p>
      <img src={arrow} alt=" " className="mb-6" />

      {/* Grid hiển thị blog */}
      <div className="flex flex-col gap-6 space-y-2 md:grid md:grid-cols-3">
        {currentBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} size="md" />
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
