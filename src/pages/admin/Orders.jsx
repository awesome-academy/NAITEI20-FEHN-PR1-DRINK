import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageBreadcrumb from "../../components/PageBreadcrumb";
import ComponentCard from "../../components/ComponentCard";

import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal/Modal";
import Button from "../../components/ui/button/ButtonAdmin";
import Label from "../../components/ui/form/Label";
import Select from "../../components/ui/form/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table/Table";
import Badge from "../../components/ui/badge/Badge";
import ActionButton from "../../components/admin/ActionButton";

import { orders } from "../../data/dummyData";

const tableData = orders.map((order) => ({
  ...order,
  buyDate: new Date().toISOString().split("T")[0],
  numProducts: order.products
    ? order.products.reduce((sum, product) => sum + (product.quantity || 0), 0)
    : 0,
  totalMoney: order.products
    ? order.products.reduce(
        (sum, product) => sum + (product.price || 0) * (product.quantity || 0),
        0,
      )
    : 0,
}));

const statusColorMap = {
  pending: "light",
  processing: "warning",
  paid: "primary",
  delivering: "info",
  done: "success",
  cancelled: "error",
};

const warehouseOptions = [
  { value: "hanoi", label: "Hà Nội" },
  { value: "hochiminh", label: "Hồ Chí Minh" },
  { value: "cantho", label: "Cần Thơ" },
  { value: "danang", label: "Đà Nẵng" },
  { value: "nhatrang", label: "Nha Trang" },
];

const statusOptions = [
  { value: "pending", label: "Pending" },
  { value: "processing", label: "Processing" },
  { value: "paid", label: "Paid" },
  { value: "delivering", label: "Delivering" },
  { value: "done", label: "Done" },
  { value: "cancelled", label: "Cancelled" },
];

export default function Orders() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();

  const [selectedWarehouse, setSelectedWarehouse] = useState("hanoi");
  const [selectedStatus, setSelectedStatus] = useState("pending");

  const handleShow = (id) => {
    navigate(`/admin/orders/${id}`);
  };

  const handleEdit = (order) => {
    const formattedWarehouse = order.warehouse
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/\s+/g, "");
    setSelectedWarehouse(formattedWarehouse);
    setSelectedStatus(order.status);
    openModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Đơn hàng" />
      <ComponentCard title={`Đơn hàng (${tableData.length})`}>
        <div className="space-y-6">
          <div className="buser buser-gray-200 dark:buser-white/[0.05] overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[1102px]">
                <Table>
                  <TableHeader className="buser-b buser-gray-100 dark:buser-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        #
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Mã đơn hàng
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Ngày mua hàng
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Khách hàng
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-center font-medium text-gray-500 dark:text-gray-400"
                      >
                        Kho nhận hàng
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-center font-medium text-gray-500 dark:text-gray-400"
                      >
                        Tổng sản phẩm
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-center font-medium text-gray-500 dark:text-gray-400"
                      >
                        Tổng tiền
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-center font-medium text-gray-500 dark:text-gray-400"
                      >
                        Trạng thái
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      ></TableCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {tableData.map((order, index) => (
                      <TableRow key={order.id}>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          {index + 1}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 font-medium text-gray-800 dark:text-white/90">
                          <a href={`/admin/orders/${order.id}`}>
                            {order.orderCode}
                          </a>
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          {order.buyDate}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          {order.customer}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                          {order.warehouse}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                          {order.numProducts}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-center text-gray-500 dark:text-gray-400">
                          {order.totalMoney.toLocaleString()} <sup>đ</sup>
                        </TableCell>
                        <TableCell className="px-4 py-3 text-center text-sm text-gray-500 uppercase dark:text-gray-400">
                          <Badge
                            size="sm"
                            color={
                              statusColorMap[order.status.toLowerCase()] ||
                              "error"
                            }
                          >
                            <span
                              className={`${
                                order.status.length > 5
                                  ? "tracking-tighter"
                                  : "tracking-widest"
                              }`}
                            >
                              {order.status}
                            </span>
                          </Badge>
                        </TableCell>
                        <TableCell className="px-5 py-4">
                          <ActionButton
                            onShow={() => handleShow(order.id)}
                            onEdit={() => handleEdit(order)}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </ComponentCard>

      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px]">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
          <div className="px-2 pr-14">
            <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
              Chỉnh sửa thông tin đơn hàng
            </h4>
            <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
              Cập nhật thông tin đơn hàng
            </p>
          </div>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-full overflow-y-auto px-2 pb-3">
              <div>
                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Kho nhận hàng</Label>
                    <Select
                      options={warehouseOptions}
                      defaultValue={selectedWarehouse}
                      onChange={setSelectedWarehouse}
                    />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Trạng thái</Label>
                    <Select
                      options={statusOptions}
                      defaultValue={selectedStatus}
                      onChange={setSelectedStatus}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>
                Đóng
              </Button>
              <Button
                size="sm"
                onClick={() => console.log("Saving changes...")}
              >
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
