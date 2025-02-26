import React, { useState } from "react";
import { Link } from "react-router-dom";

import separatorLeft from "../assets/images/titleleft-dark.png";
import { Button } from "../components/ui/button/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, remember });
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-6 bg-white text-gray-500">
      <nav className="container mt-6 px-4 text-sm text-gray-600 md:px-64">
        <Link to="/" className="text-gray-500 hover:text-black">
          Trang chủ
        </Link>{" "}
        /<span className="text-yellow-500"> Đăng nhập</span>
      </nav>
      <div className="container mb-4 flex justify-between px-4 md:px-64">
        <div>
          <h1 className="mb-1 text-2xl text-gray-800 uppercase">Đăng nhập</h1>
          <img src={separatorLeft} alt="Separator" className="w-18" />
        </div>
        <a href="/sign-up">
          <Button size="lg">Đăng ký</Button>
        </a>
      </div>
      <div className="container flex w-full justify-center px-4 md:px-64">
        <form
          onSubmit={handleSubmit}
          className="w-full border border-gray-300 px-12 py-10 text-gray-800"
        >
          <h2 className="mb-4 text-base tracking-wider uppercase">
            KHÁCH HÀNG ĐĂNG NHẬP
          </h2>
          <p className="mb-10 text-sm">
            Nếu bạn có một tài khoản, xin vui lòng đăng nhập.
          </p>

          <div className="mb-8 flex justify-between">
            <label className="block text-xs font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-7/10 border border-gray-300 p-0.5 md:w-9/10"
              required
            />
          </div>

          <div className="mb-6 flex justify-between">
            <label className="block text-xs font-medium">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-7/10 border border-gray-300 p-0.5 md:w-9/10"
              required
            />
          </div>

          <div className="mb-6 ml-auto flex w-7/10 items-center md:w-9/10">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="mr-2"
            />
            <label className="text-xs">Quên mật khẩu</label>
          </div>
          <div className="ml-auto w-7/10 md:w-9/10">
            <a href="/">
              <Button type="submit">Đăng nhập</Button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
