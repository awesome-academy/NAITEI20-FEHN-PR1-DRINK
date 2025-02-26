import { useState } from "react";

import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../ui/modal/Modal";
import Button from "../../ui/button/ButtonAdmin";
import Select from "../../ui/form/Select";
import Label from "../../ui/form/Label";
import Badge from "../../ui/badge/Badge";

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

export default function UserInfoCard() {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedWarehouse, setSelectedWarehouse] = useState("hanoi");
  const [selectedStatus, setSelectedStatus] = useState("pending");

  const handleSave = () => {
    console.log("Kho nhận hàng:", selectedWarehouse);
    console.log("Trạng thái:", selectedStatus);
    closeModal();
  };

  return (
    <div className="rounded-2xl border border-gray-200 p-5 lg:p-6 dark:border-gray-800">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Mã đơn hàng
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                ANNGUYEN-1
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Ngày mua hàng
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                2025-02-26
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Khách hàng
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Nguyen An
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Kho nhận hàng
              </p>
              <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                Hà Nội
              </p>
            </div>

            <div>
              <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                Trạng thái
              </p>
              <Badge color="light">PENDING</Badge>
            </div>
          </div>
        </div>

        <button
          onClick={openModal}
          className="shadow-theme-xs flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-nowrap text-gray-700 hover:bg-gray-50 hover:text-gray-800 lg:inline-flex lg:w-auto dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.0911 2.78206C14.2125 1.90338 12.7878 1.90338 11.9092 2.78206L4.57524 10.116C4.26682 10.4244 4.0547 10.8158 3.96468 11.2426L3.31231 14.3352C3.25997 14.5833 3.33653 14.841 3.51583 15.0203C3.69512 15.1996 3.95286 15.2761 4.20096 15.2238L7.29355 14.5714C7.72031 14.4814 8.11172 14.2693 8.42013 13.9609L15.7541 6.62695C16.6327 5.74827 16.6327 4.32365 15.7541 3.44497L15.0911 2.78206ZM12.9698 3.84272C13.2627 3.54982 13.7376 3.54982 14.0305 3.84272L14.6934 4.50563C14.9863 4.79852 14.9863 5.2734 14.6934 5.56629L14.044 6.21573L12.3204 4.49215L12.9698 3.84272ZM11.2597 5.55281L5.6359 11.1766C5.53309 11.2794 5.46238 11.4099 5.43238 11.5522L5.01758 13.5185L6.98394 13.1037C7.1262 13.0737 7.25666 13.003 7.35947 12.9002L12.9833 7.27639L11.2597 5.55281Z"
              fill=""
            />
          </svg>
          Chỉnh sửa
        </button>
      </div>

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
              <Button size="sm" onClick={handleSave}>
                Lưu thay đổi
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
