import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BlogCard from "../components/BlogCard";
import BlogSide from "../components/blog_detail/BlogSide";
import CommentList from "../components/blog_detail/CommentList";
import { blogs } from "../data/dummyData";
import arrow from "../assets/images/arrow.png";

const BlogDetail = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
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
    <div className="container mx-auto p-4">
      <ToastContainer />  
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          / <span className="text-yellow-500">Blog</span>
        </nav>
      </div>
      <p className="font-medium text-2xl pb-2 uppercase text-gray-700">Blog</p>
      <img src={arrow} alt=" " className="mb-6"/>
      <div className="flex gap-5">
        <div className="">
          <BlogSide blog={blog}/>
        </div>
        <div className="">
          {blog ? <BlogCard size="large" blog={blog} /> : <p>Blog không tồn tại!</p>}
          {/* Form */}
          <form onSubmit={handleSubmit} className="w-200 mx-auto mb-10 text-black">
            <h2 className="text-lg italic font-medium mb-4">ĐÓNG GÓP Ý KIẾN</h2>       

            <div className="flex items-center">
              <div className="flex-1 items-center text-sm">
                <label className="mr-1 italic">Tên</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-9 w-full p-2 border border-gray-300 mb-3"
              />
            </div>

            <div className="flex items-center">
              <div className="flex-1 items-center text-sm">
                <label className="mr-1 italic">Email</label>
                <span className="text-red-500">*</span>
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="flex-9 w-full p-2 border border-gray-300 mb-3"
              />
            </div>

            <div className="flex items-center">
              <div className="flex-1 items-center text-sm">
                <label className="mr-1 italic">Ý kiến</label>
                <span className="text-red-500">*</span>
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="flex-9 w-full h-60 p-2 border border-gray-300 mb-3"
              />
            </div>
            <div className="flex">
              <div className="w-1/10"></div>
              <button type="submit" className="bg-gray-200 rounded text-black px-4 py-2 cursor-pointer hover:text-white hover:bg-black">
                GỬI Ý KIẾN
              </button>
            </div>
          </form>
          {/* Comment */}
          <CommentList/>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail;
