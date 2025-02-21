import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaMapMarkerAlt, FaPhoneAlt, FaUser } from "react-icons/fa";

import separatorLeft from "../assets/images/titleleft-dark.png";
import { cn } from "../lib/utils";

const orderData = [
  {
    id: 1,
    orderId: "LEANHGIANG89-17/06/2015",
    date: "01:36 17/06/2015",
    warehouse: "HÀ ĐÔNG",
    quantity: 7,
    total: "350.000₫",
    status: "Đã thanh toán",
  },
  {
    id: 2,
    orderId: "LEANHGIANG89-18/06/2015",
    date: "01:36 18/06/2015",
    warehouse: "BẮC NINH",
    quantity: 5,
    total: "250.000₫",
    status: "Đã hủy",
  },
  {
    id: 3,
    orderId: "LEANHGIANG89-19/06/2015",
    date: "01:36 19/06/2015",
    warehouse: "HÀ NỘI",
    quantity: 10,
    total: "500.000₫",
    status: "Chưa duyệt",
  },
  {
    id: 4,
    orderId: "LEANHGIANG89-20/06/2015",
    date: "01:36 20/06/2015",
    warehouse: "QUẢNG NINH",
    quantity: 3,
    total: "150.000₫",
    status: "Đã duyệt",
  },
  {
    id: 5,
    orderId: "LEANHGIANG89-21/06/2015",
    date: "01:36 21/06/2015",
    warehouse: "HÀ NỘI",
    quantity: 2,
    total: "100.000₫",
    status: "Đã thanh toán",
  },
  {
    id: 6,
    orderId: "LEANHGIANG89-22/06/2015",
    date: "01:36 22/06/2015",
    warehouse: "HỒ CHÍ MINH",
    quantity: 8,
    total: "400.000₫",
    status: "Đã mua hàng",
  },
  {
    id: 7,
    orderId: "LEANHGIANG89-23/06/2015",
    date: "01:36 23/06/2015",
    warehouse: "ĐÀ NẴNG",
    quantity: 6,
    total: "300.000₫",
    status: "Hàng đã về",
  },
  {
    id: 8,
    orderId: "LEANHGIANG89-24/06/2015",
    date: "01:36 24/06/2015",
    warehouse: "HẢI PHÒNG",
    quantity: 4,
    total: "200.000₫",
    status: "Đã kết thúc",
  },
  {
    id: 9,
    orderId: "LEANHGIANG89-25/06/2015",
    date: "01:36 25/06/2015",
    warehouse: "THÁI NGUYÊN",
    quantity: 9,
    total: "450.000₫",
    status: "Chưa duyệt",
  },
  {
    id: 10,
    orderId: "LEANHGIANG89-26/06/2015",
    date: "01:36 26/06/2015",
    warehouse: "HÀ ĐÔNG",
    quantity: 12,
    total: "600.000₫",
    status: "Đã thanh toán",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(orderData);
  const [selectedStatus, setSelectedStatus] = useState("Tất cả");

  const statusOptions = [
    "Tất cả",
    "Đã hủy",
    "Chưa duyệt",
    "Đã duyệt",
    "Đã thanh toán",
    "Đã mua hàng",
    "Hàng đã về",
    "Đã kết thúc",
  ];

  const filteredOrders =
    selectedStatus === "Tất cả"
      ? orders
      : orders.filter((order) => order.status === selectedStatus);

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  const statusCounts = statusOptions.reduce((acc, status) => {
    if (status === "Tất cả") {
      acc[status] = orders.length;
    } else {
      acc[status] = orderData.filter((order) => order.status === status).length;
    }
    return acc;
  }, {});

  return (
    <div className="mx-auto flex flex-col items-center justify-between gap-6 bg-white text-gray-500">
      <nav className="container mt-6 px-4 text-sm text-gray-600 md:px-64">
        <Link to="/" className="text-gray-500 hover:text-black">
          Trang chủ
        </Link>{" "}
        /<span className="text-yellow-500"> Danh sách đơn hàng</span>
      </nav>
      <div className="container px-4 md:px-64">
        <h1 className="mb-1 text-2xl text-gray-800">ĐƠN HÀNG</h1>
        <img src={separatorLeft} alt="Separator" className="w-18" />
      </div>
      <div className="container flex flex-col justify-between gap-4 px-4 md:flex-row md:px-64">
        <div className="block h-full w-full border border-gray-300 bg-gray-50 px-6 py-8 text-gray-800 md:hidden">
          <h2 className="mb-2 text-base text-nowrap">THÔNG TIN KHÁCH HÀNG</h2>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaUser className="size-4" />
            <div>
              <p>GiangLe</p>
              <p>Leanhgiang89@gmail.com</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaMapMarkerAlt className="size-4" />
            <p>
              Tòa nhà Hà Nội group
              <br />
              442 Đội Cấn, Ba Đình Hà Nội
            </p>
          </div>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaPhoneAlt className="size-4" />
            <p>(04) 3786 8904</p>
          </div>
          <div className="mt-4 text-sm underline">Chi tiết địa chỉ</div>
        </div>

        <div className="flex w-full flex-col items-center justify-between md:w-3/4">
          <table className="w-full border-collapse border-gray-300 text-sm text-gray-800">
            <thead>
              <tr>
                <th
                  className="border-t border-r border-l border-gray-300 bg-gray-50 px-6 py-8 text-left font-medium"
                  colSpan="7"
                >
                  <div className="mb-4 text-base uppercase">
                    Danh sách đơn hàng
                  </div>
                  <div>
                    <span>Trạng thái </span>
                    {statusOptions.map((status, index) => (
                      <span
                        key={status}
                        onClick={() => handleStatusClick(status)}
                        className={cn(
                          "cursor-pointer",
                          selectedStatus === status ? "text-yellow-500" : "",
                        )}
                      >
                        {status} ({statusCounts[status]})
                        {index < statusOptions.length - 1 && " | "}
                      </span>
                    ))}
                  </div>
                </th>
              </tr>
            </thead>
          </table>

          <div className="w-full overflow-x-scroll">
            <table className="w-full border-collapse border border-gray-300 text-sm text-gray-800">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    STT
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    MÃ HÓA ĐƠN/NGÀY MUA HÀNG
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    KHO NHẬN HÀNG
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    SỐ SP
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    TỔNG TIỀN
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    TÌNH TRẠNG
                  </th>
                  <th className="border border-gray-300 p-3 text-xs font-medium text-nowrap">
                    THAO TÁC
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      {order.id}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-nowrap">
                      {order.orderId}
                      <br />
                      <p className="text-xs text-gray-400">{order.date}</p>
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      {order.warehouse}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      {order.quantity}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      {order.total}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      {order.status}
                    </td>
                    <td className="border-r border-gray-300 px-4 py-2 text-center text-nowrap">
                      <button>Chi tiết</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="hidden h-full w-1/4 border border-gray-300 bg-gray-50 px-6 py-8 text-gray-800 md:block">
          <h2 className="mb-2 text-base text-nowrap">THÔNG TIN KHÁCH HÀNG</h2>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaUser className="size-4" />
            <div>
              <p>GiangLe</p>
              <p>Leanhgiang89@gmail.com</p>
            </div>
          </div>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaMapMarkerAlt className="size-4" />
            <p>
              Tòa nhà Hà Nội group
              <br />
              442 Đội Cấn, Ba Đình Hà Nội
            </p>
          </div>
          <div className="mb-2 flex items-center gap-4 p-1 text-xs">
            <FaPhoneAlt className="size-4" />
            <p>(04) 3786 8904</p>
          </div>
          <div className="mt-4 text-sm underline">Chi tiết địa chỉ</div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
