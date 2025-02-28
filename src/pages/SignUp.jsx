import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import separatorLeft from "../assets/images/titleleft-dark.png";
import { Button } from "../components/Button";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="mx-auto flex flex-col items-center gap-6 bg-white text-gray-500">
      <nav className="container mt-6 px-64 text-sm text-gray-600">
        <Link to="/" className="text-gray-500 hover:text-black">
          Trang chủ
        </Link>
        / <span className="text-yellow-500">Đăng ký</span>
      </nav>
      <div className="container mb-4 flex justify-between px-64">
        <div>
          <h1 className="mb-1 text-2xl text-gray-800 uppercase">Đăng ký</h1>
          <img src={separatorLeft} alt="Separator" className="w-18" />
        </div>
        <Button size="lg" onClick={() => navigate("/sign-in")}>Đăng nhập</Button>
      </div>
      <div className="container flex w-full justify-center px-64">
        <form
          onSubmit={handleSubmit}
          className="w-full border border-gray-300 px-12 py-10 text-gray-800"
        >
          <h2 className="mb-4 text-base tracking-wider uppercase">
            THÔNG TIN CÁ NHÂN
          </h2>

          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium">Tên *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium">Họ *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="mb-4 flex justify-between">
            <label className="block text-xs font-medium">Password *</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="mb-6 ml-auto flex w-9/10 items-center">
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-xs">Đăng ký nhận bản tin</label>
          </div>
          <h2 className="mb-4 text-base tracking-wider uppercase">
            THÔNG TIN ĐĂNG NHẬP
          </h2>
          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium">Mật khẩu *</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium text-nowrap">
              Xác nhận mật khẩu *
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="ml-4 w-9/10 border border-gray-300 p-0.5"
              required
            />
          </div>

          <div className="flex justify-end gap-4">
            <Button type="submit">GỬI</Button>
            <Button>QUAY LẠI</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
