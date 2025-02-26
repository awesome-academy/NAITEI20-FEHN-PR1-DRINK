import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import popup from "../assets/images/popup.png";
import { Button } from "./ui/button/Button";

const EmailPopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center backdrop-brightness-50">
      <div className="relative -top-20 h-auto w-full max-w-2xl bg-white p-10">
        <IoMdClose
          className="absolute -top-8 -right-8 h-auto w-8 cursor-pointer text-white hover:text-black"
          onClick={() => setIsOpen(false)}
        />
        <div className="grid grid-cols-6 items-center">
          <div className="col-span-2 -mt-4 -mb-10 -ml-10">
            <img src={popup} alt="Wine house" className="h-auto w-100" />
          </div>
          <div className="col-span-4 text-center">
            <h2 className="mb-3 text-4xl font-medium text-black">Gửi Email</h2>
            <p className="mb-4 text-sm text-gray-500">
              Đăng ký Email ngay hôm nay để nhận được thông tin về các sự kiện,
              các chương trình giảm giá của chúng tôi sớm nhất!
            </p>
            <div className="mb-4 flex items-center justify-center">
              <input
                type="email"
                placeholder="Email của bạn..."
                className="w-1/2 w-full border border-gray-200 px-4 py-2 text-sm text-gray-500 outline-none focus:border-black"
              />
              <Button
                size="lg"
                className="bg-yellow-500 px-5 hover:bg-black"
                onClick={() => setIsOpen(false)}
              >
                GỬI EMAIL
              </Button>
            </div>
            <div className="mt-3 flex items-center justify-center">
              <input
                type="checkbox"
                id="dont-show"
                className="mr-2 cursor-pointer"
              />
              <label htmlFor="dont-show" className="text-sm text-gray-500">
                Không hiển thị lại thông báo này
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailPopup;
