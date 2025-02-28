import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Select = ({
  options = [],
  placeholder = "Select an option",
  onChange,
  className = "",
  value, // Nhận giá trị từ bên ngoài (có thể là object hoặc string)
}) => {
  const getDefaultValue = () => {
    if (!value) return "";
    return typeof value === "object" ? value.value : value; // Lấy value nếu là object
  };

  const [selectedValue, setSelectedValue] = useState(getDefaultValue());

  useEffect(() => {
    setSelectedValue(getDefaultValue());
  }, [value]);

  const handleChange = (e) => {
    const selected = options.find((option) => option.value === e.target.value);
    setSelectedValue(selected ? selected.value : "");
    onChange && onChange(selected || e.target.value);
  };

  return (
    <div className="relative w-full">
      <select
        className={`shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm placeholder:text-gray-400 focus:ring focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
          selectedValue ? "text-gray-800 dark:text-white/90" : "text-gray-400 dark:text-gray-400"
        } ${className}`}
        value={selectedValue}
        onChange={handleChange}
      >
        <option value="" disabled className="text-gray-700 dark:bg-gray-900 dark:text-gray-400">
          {placeholder}
        </option>
        {options.length > 0 ? (
          options.map((option) => (
            <option
              key={option.value} 
              value={option.value}
              className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
            >
              {option.label}
            </option>
          ))
        ) : (
          <option disabled>Không có lựa chọn</option>
        )}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <FaChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default Select;
