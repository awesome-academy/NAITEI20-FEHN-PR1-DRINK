import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { Button } from "../components/Button";
import arrow from "../assets/images/arrow.png";
import { useCart } from "../context/CartContext.jsx"; 

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="container w-250 mx-auto p-4">
      <div className="mb-6">
      <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          /
          <Link to="/products" className="text-gray-500 hover:text-black">
            {" "}
            Sản phẩm
          </Link>{" "}
          / <span className="text-yellow-500">Giỏ hàng</span>
        </nav>
        <p className="uppercase text-black mb-2 text-2xl">Giỏ hàng</p>
        <img src={arrow} alt=" " />
      </div>

      <table className="w-full border border-gray-200 bg-gray-100 text-black text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2">ẢNH</th>
            <th className="border border-gray-200 px-4 py-2">TÊN SẢN PHẨM</th>
            <th className="border border-gray-200 px-4 py-2">GIÁ</th>
            <th className="border border-gray-200 px-4 py-2">SỐ LƯỢNG</th>
            <th className="border border-gray-200 px-4 py-2">TỔNG SỐ</th>
            <th className="border border-gray-200 px-4 py-2">XÓA</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="border border-gray-200 px-4 py-2 uppercase w-[15%]">
                <img src={item.image} alt={item.name} className="w-30 h-auto mx-auto" />
              </td>
              <td className="border border-gray-200 px-4 py-2 w-[30%]">{item.name}</td>
              <td className="border border-gray-200 px-4 py-2 text-yellow-500 w-[15%]">
                {item.price.toLocaleString()} đ
              </td>
              <td className="border border-gray-200 px-4 py-2 w-[15%]">
                <input
                  type="number"
                  className="w-12 text-center border border-gray-200"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                />
              </td>
              <td className="border border-gray-200 px-4 py-2 text-yellow-500 w-[15%]">
                {(item.price * item.quantity).toLocaleString()} đ
              </td>
              <td className="border border-gray-200 px-4 py-2 w-[10%]">
                <button
                  className="text-gray-400 hover:text-red-500 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Nút chức năng */}
      <div className="flex gap-2 justify-end mt-6">
        <Button onClick={() => navigate("/orders")}>TIẾP TỤC MUA HÀNG</Button>
        <Button onClick={clearCart}>XÓA</Button>
        <Button>CẬP NHẬT</Button>
      </div>
    </div>
  );
};

export default Cart;
