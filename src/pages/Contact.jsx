import React, {useState} from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaGoogle, FaTwitter, FaYoutube, FaPinterest, FaVk } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import arrow from "../assets/images/arrow.png";
import { Button } from "../components/Button";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
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
      subject: "",
      message: "",
    });
  };
  return (
    <div className="container mx-auto w-full">
      <ToastContainer />  
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          / <span className="text-yellow-500">Liên hệ</span>
        </nav>
        <p className="uppercase text-black text-2xl mb-2">Liên hệ</p>
        <img src={arrow} alt=" " />
      </div>
      <div className="flex flex-col gap-10 md:flex-row items-center md:items-start bg-white mt-6">
        {/* Google Map */}
        <div className="w-full h-auto md:h-96">
          <iframe
            className="w-full h-full border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6870289441066!2d105.81470587607447!3d21.00595888805938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abddb5017d65%3A0xa6131e48ea70a8f!2zNDQyIMSQ4buTbmcgQ8OibiBWw6ogLSBCw6AgxJDhuq9uaCwgSMOgIE7hu5lpLCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        
        {/* Contact Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <img src={logo} alt="" className="mb-4" />
          <div className="text-gray-600 space-y-2">
            <p className="flex justify-center md:justify-start">
              <FaMapMarkerAlt className="mr-2 text-gray-500" size="30"/>
              Tầng 4, Tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q. Ba Đình, Hà Nội
            </p>
            <p className="flex justify-center md:justify-start">
              <FaPhone className="mr-2 text-gray-500" /> (04) 6674 2332
            </p>
            <p className="flex justify-center md:justify-start">
              <FaEnvelope className="mr-2 text-gray-500" /> support@milano.com
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="mt-6">
            <h3 className="text-gray-600 uppercase text-lg font-medium mb-2">FOLLOW US:</h3>
            <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-yellow-500" />
              <FaGoogle className="cursor-pointer hover:text-yellow-500" />
              <FaTwitter className="cursor-pointer hover:text-yellow-500" />
              <FaYoutube className="cursor-pointer hover:text-yellow-500" />
              <FaPinterest className="cursor-pointer hover:text-yellow-500" />
              <FaVk className="cursor-pointer hover:text-yellow-500" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex gap-10 mt-10">
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full mx-auto left-0 mb-10 text-gray-500">   
          <div className="flex">
            <div className="flex-2 text-sm">
              <label className="mr-1">Your Name</label>
            </div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="flex-8 w-full p-2 border border-gray-300 mb-3 bg-gray-100"
            />
          </div>

          <div className="flex">
            <div className="flex-2 text-sm">
              <label className="mr-1">Your Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="flex-8 w-full p-2 border border-gray-300 mb-3 bg-gray-100"
            />
          </div>

          <div className="flex">
            <div className="flex-2 text-sm">
              <label className="mr-1">Subject</label>
            </div>
            <input
              type="message"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="flex-8 w-full p-2 border border-gray-300 mb-3 bg-gray-100"
            />
          </div>

          <div className="flex">
            <div className="flex-2 text-sm">
              <label className="mr-1">Your Message</label>
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="flex-8 w-full h-30 p-2 border border-gray-300 mb-3 bg-gray-100"
            />
          </div>
          <div className="flex">
            <div className="w-2/10"></div>
            <Button type="submit" size="lg">
              GỬI
            </Button>
          </div>
        </form>
        <div className="w-full md:w-1/2 text-center md:text-left"></div>
      </div>
    </div>
  );
};

export default Contact;
