import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PageBreadcrumb from "../../components/PageBreadcrumb";
import ComponentCard from "../../components/ComponentCard";

import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal/Modal";
import Button from "../../components/ui/button/ButtonAdmin";
import Input from "../../components/ui/form/input/InputField";
import Label from "../../components/ui/form/Label";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table/Table";
import ActionButton from "../../components/admin/ActionButton";

import { FaUser } from "react-icons/fa6";

import { users } from "../../data/dummyData";

const tableData = users;

export default function Users() {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleShow = (id) => {
    navigate(`/admin/users/${id}`);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    openModal();
  };

  return (
    <>
      <PageBreadcrumb pageTitle="Người dùng" />
      <ComponentCard title={"Người dùng (" + tableData.length + ")"}>
        <div className="space-y-6">
          <div className="buser buser-gray-200 dark:buser-white/[0.05] overflow-hidden rounded-xl bg-white dark:bg-white/[0.03]">
            <div className="max-w-full overflow-x-auto">
              <div className="min-w-[1102px]">
                <Table>
                  {/* Table Header */}
                  <TableHeader className="buser-b buser-gray-100 dark:buser-white/[0.05]">
                    <TableRow>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Tên
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Email
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Số điện thoại
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Công ty
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      >
                        Địa chỉ
                      </TableCell>
                      <TableCell
                        isHeader
                        className="text-theme-xs px-5 py-3 text-start font-medium text-gray-500 dark:text-gray-400"
                      ></TableCell>
                    </TableRow>
                  </TableHeader>

                  {/* Table Body */}
                  <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
                    {tableData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="px-5 py-4 text-start sm:px-6">
                          <div>
                            <a
                              className="flex items-center gap-3"
                              href={`users/${user.id}`}
                            >
                              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gray-100">
                                <FaUser className="size-6 text-gray-700" />
                              </div>
                              <div>
                                <span className="text-theme-sm block font-medium text-gray-800 dark:text-white/90">
                                  {user.last_name} {user.first_name}
                                </span>
                              </div>
                            </a>
                          </div>
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          {user.email}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          <div className="flex -space-x-2">
                            {user.phone_number}
                          </div>
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-start text-gray-500 dark:text-gray-400">
                          {user.company}
                        </TableCell>
                        <TableCell className="text-theme-sm px-4 py-3 text-gray-500 dark:text-gray-400">
                          {user.address}
                        </TableCell>
                        <TableCell className="px-4 py-3">
                          <ActionButton
                            onShow={() => handleShow(user.id)}
                            onEdit={() => handleEdit(user)}
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
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">
            Chỉnh sửa thông tin cá nhân
          </h4>

          <p className="mb-6 text-sm text-gray-500 lg:mb-7 dark:text-gray-400">
            Cập nhật thông tin cá nhân của bạn
          </p>

          <form className="flex flex-col">
            <div className="custom-scrollbar h-[470px] overflow-y-auto px-2 pb-3">
              <div>
                <h5 className="mb-5 text-lg font-medium text-gray-800 lg:mb-6 dark:text-white/90">
                  Thông tin cá nhân
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div className="col-span-2 lg:col-span-1">
                    <Label>Tên</Label>
                    <Input type="text" value={selectedUser?.first_name || ""} />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Họ</Label>
                    <Input type="text" value={selectedUser?.last_name || ""} />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Email</Label>
                    <Input type="text" value={selectedUser?.email || ""} />
                  </div>

                  <div className="col-span-2 lg:col-span-1">
                    <Label>Số điện thoại</Label>
                    <Input
                      type="text"
                      value={selectedUser?.phone_number || ""}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <h5 className="mb-5 text-lg font-medium text-gray-800 lg:mb-6 dark:text-white/90">
                  Địa chỉ
                </h5>

                <div className="grid grid-cols-1 gap-x-6 gap-y-5 lg:grid-cols-2">
                  <div>
                    <Label>Địa chỉ</Label>
                    <Input type="text" value="123 Đường Lê Lợi" />
                  </div>

                  <div>
                    <Label>Thành phố</Label>
                    <Input type="text" value="Hà Nội" />
                  </div>

                  <div>
                    <Label>Quốc gia</Label>
                    <Input type="text" value="Vietnam" />
                  </div>

                  <div>
                    <Label>Postal/Zip Code</Label>
                    <Input type="text" value="100000" />
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
