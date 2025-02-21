import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogCard from "../components/BlogCard";
import BlogSide from "../components/blog_detail/BlogSide";
import CommentList from "../components/blog_detail/CommentList";
import { blogs } from "../data/dummyData";
import arrow from "../assets/images/arrow.png";

const BlogDetail = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { id } = useParams(); // Lấy id từ URL
  const blog = blogs.find((b) => b.id === Number(id));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Gửi ý kiến thành công!", {
      position: "top-right",
      autoClose: 3000,
    });
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mx-auto px-4 md:px-64">
      <ToastContainer />
      <div className="my-6">
        <p className="mb-4 text-sm text-gray-600">
          Trang chủ / <span className="text-yellow-500">Blog</span>
        </p>
      </div>
      <p className="pb-2 text-2xl font-medium text-gray-700 uppercase">Blog</p>
      <img src={arrow} alt=" " className="mb-6" />
      <div className="flex gap-5">
        <div className="hidden md:block">
          <BlogSide blog={blog} />
        </div>
        <div className="w-full md:w-200">
          {blog ? (
            <BlogCard size="lg" blog={blog} />
          ) : (
            <p>Blog không tồn tại!</p>
          )}
          <div className="block md:hidden">
            <BlogSide blog={blog} />
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mb-10 w-full text-black md:w-200"
          >
            <h2 className="my-4 text-lg font-medium italic">ĐÓNG GÓP Ý KIẾN</h2>

            <div className="flex items-center">
              <div className="flex-2 items-center text-sm md:flex-1">
                <label className="mr-1 italic">Tên</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mb-3 w-full flex-8 border border-gray-300 p-2 md:flex-9"
              />
            </div>

            <div className="flex items-center">
              <div className="flex-2 items-center text-sm md:flex-1">
                <label className="mr-1 italic">Email</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mb-3 w-full flex-8 border border-gray-300 p-2 md:flex-9"
              />
            </div>

            <div className="flex items-center">
              <div className="flex-2 items-center text-sm md:flex-1">
                <label className="mr-1 italic">Ý kiến</label>
                <span className="text-red-500">*</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="mb-3 h-60 w-full flex-8 border border-gray-300 p-2 md:flex-9"
              />
            </div>
            <div className="flex">
              <div className="w-2/10 md:w-1/10"></div>
              <button
                type="submit"
                className="cursor-pointer rounded bg-gray-200 px-4 py-2 text-black hover:bg-black hover:text-white"
              >
                GỬI Ý KIẾN
              </button>
            </div>
          </form>
          {/* Comment */}
          <CommentList />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
