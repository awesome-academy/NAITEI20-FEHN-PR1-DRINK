import { useState } from "react";
import { FiMoreVertical, FiEye, FiEdit, FiTrash } from "react-icons/fi";

const ActionButton = ({ onShow, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left text-gray-500">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-md border border-gray-200 p-2 hover:bg-gray-100"
      >
        <FiMoreVertical size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-40 rounded-lg border border-gray-200 bg-white shadow-lg">
          <button
            onClick={() => {
              setIsOpen(false);
              onShow();
            }}
            className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <FiEye className="mr-2" /> Show Detail
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onEdit();
            }}
            className="flex w-full items-center px-4 py-2 text-sm hover:bg-gray-100"
          >
            <FiEdit className="mr-2" /> Edit
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onDelete();
            }}
            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            <FiTrash className="mr-2" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;
