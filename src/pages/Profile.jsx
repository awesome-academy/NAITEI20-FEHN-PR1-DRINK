import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { addressesData } from "../data/dummyData";
import arrow from "../assets/images/arrow.png";

const Profile = () => {
  const [addresses, setAddresses] = useState(addressesData);

  const [editingAddress, setEditingAddress] = useState(null);
  const [addingNew, setAddingNew] = useState(false);

  const handleEdit = (address) => {
    setEditingAddress(address);
    setAddingNew(false);
  };

  const handleAddNew = () => {
    setAddingNew(true);
    setEditingAddress(null);
  };

  const handleSave = (updatedAddress) => {
    if (addingNew) {
      setAddresses([...addresses, { id: addresses.length + 1, ...updatedAddress }]);
    } else {
      setAddresses(addresses.map(addr => (addr.id === updatedAddress.id ? updatedAddress : addr)));
    }
    setEditingAddress(null);
    setAddingNew(false);
  };

  return (
    <div className="container mx-auto max-w-5xl p-6 text-black">
      <div className="mb-6">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          / <span className="text-yellow-500">Địa chỉ</span>
        </nav>
        <p className="uppercase text-black text-2xl mb-2">ĐỊA CHỈ</p>
        <img src={arrow} alt=" " />
      </div>
      <div className="grid grid-cols-2 gap-8">
        {/* CỘT 1: Danh sách địa chỉ */}
        <div>
          <h2 className="text-lg mb-4">ĐỊA CHỈ CỦA BẠN</h2>
          <div>
            {addresses.map((address) => (
              <div key={address.id} className="w-full max-w-lg min-h-[200px]">
                {editingAddress?.id === address.id ? (
                  <AddressForm
                    address={editingAddress}
                    onSave={handleSave}
                    onCancel={() => setEditingAddress(null)}
                  />
                ) : (
                  <div>
                    <div className="grid grid-cols-[1fr_3fr] gap-4 gap-x-10">
                      <p>Tên</p> <p>{address.name}</p>
                      <p>Họ & tên đệm</p> <p>{address.lastName}</p>
                      <p>Công ty</p> <p>{address.company}</p>
                      <p>Địa chỉ</p> <p>{address.address}</p>
                      <p>Thành phố</p> <p>{address.city}</p>
                      <p>Quốc tịch</p> <p>{address.country}</p>
                      <p>Postal/Zip Code</p> <p>{address.zip}</p>
                      <p>Phone</p> <p>{address.phone}</p>
                    </div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => handleEdit(address)} 
                        className="text-cyan-500 mt-4 underline cursor-pointer"
                      >
                        Chỉnh sửa địa chỉ
                      </button>
                    </div>
                    <hr className="text-gray-200 my-6"/>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CỘT 2: Thêm địa chỉ */}
        <div>
          <button 
            onClick={handleAddNew} 
            className="text-cyan-500 underline cursor-pointer"
          >
            Thêm địa chỉ
          </button>

          {addingNew && (
            <div className="mt-6">
              <AddressForm
                onSave={handleSave}
                onCancel={() => setAddingNew(false)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const AddressForm = ({ address, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    address || {
      name: "",
      lastName: "",
      company: "",
      address: "",
      city: "Hà Nội",
      country: "Việt Nam",
      zip: "",
      phone: "",
      isDefault: false,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg min-h-[200px]">
      <div className="grid grid-cols-[1fr_3fr] gap-2 gap-x-10 items-center">
        <p>Tên</p> 
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Tên" className="border border-gray-200 px-4 py-1" required />

        <p>Họ & tên đệm</p> 
        <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Họ & tên đệm" className="border border-gray-200 px-4 py-1" required />

        <p>Công ty</p> 
        <input name="company" value={formData.company} onChange={handleChange} placeholder="Công ty" className="border border-gray-200 px-4 py-1" />

        <p>Địa chỉ</p> 
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Địa chỉ" className="border border-gray-200 px-4 py-1" required />

        <p>Thành phố</p> 
        <select name="city" value={formData.city} onChange={handleChange} className="border border-gray-200 px-4 py-1">
          <option value="Hà Nội">Hà Nội</option>
          <option value="Hồ Chí Minh">Hồ Chí Minh</option>
        </select>

        <p>Quốc tịch</p> 
        <select name="country" value={formData.country} onChange={handleChange} className="border border-gray-200 px-4 py-1">
          <option value="Việt Nam">Việt Nam</option>
        </select>

        <p>Postal/Zip Code</p> 
        <input name="zip" value={formData.zip} onChange={handleChange} placeholder="Postal/Zip Code" className="border border-gray-200 px-4 py-1" required />

        <p>Phone</p>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="border border-gray-200 px-4 py-1" required />

        <p></p>
        <label>
          <input type="checkbox" name="isDefault" className="mt-2 mr-2" checked={formData.isDefault} onChange={handleChange} /> Đặt làm địa chỉ mặc định
        </label>

        <p></p>
        <div className="flex gap-4 mt-2">
          <Button type="submit" className="bg-cyan-500 hover:bg-blue-500 normal-case text-sm">
            {formData.id ? "Chỉnh sửa địa chỉ" : "Cập nhật địa chỉ"}
          </Button>
          <Button type="button" onClick={onCancel} className="bg-black hover:bg-gray-500 normal-case text-sm">
            Thoát
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
