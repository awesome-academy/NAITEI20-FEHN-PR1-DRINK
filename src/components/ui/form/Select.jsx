import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Select = ({
  options,
  placeholder = "Select an option",
  onChange,
  className = "",
  defaultValue = "",
}) => {
  // Manage the selected value
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value); // Trigger parent handler
  };

  return (
    <div className="relative w-full">
      <select
        className={`shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pr-11 text-sm placeholder:text-gray-400 focus:ring focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 ${
          selectedValue
            ? "text-gray-800 dark:text-white/90"
            : "text-gray-400 dark:text-gray-400"
        } ${className}`}
        value={selectedValue}
        onChange={handleChange}
      >
        {/* Placeholder option */}
        <option
          value=""
          disabled
          className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {placeholder}
        </option>
        {/* Map over options */}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
          >
            {option.label}
          </option>
        ))}
      </select>

      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <FaChevronDown size={16} className="text-gray-500 dark:text-gray-400" />
      </div>
    </div>
  );
};

export default Select;
