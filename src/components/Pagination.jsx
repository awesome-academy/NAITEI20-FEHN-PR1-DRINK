import React from "react";

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (currentPage > 4 && currentPage < totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }

    return pageNumbers.slice(0, 7);
  };

  return (
    <div className="flex justify-center mt-4 space-x-2">
      {/* Nút Trước */}
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 border font-bold ${currentPage === 1 ? "border-gray-200 bg-gray-200 text-gray-400" : "bg-black text-white cursor-pointer"}`}
      >
        &lt;
      </button>

      {/* Hiển thị số trang */}
      {renderPageNumbers().map((page, index) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1 text-gray-400">...</span>
        ) : (
          <button
            key={index}
            onClick={() => paginate(page)}
            className={`px-3 py-1 border border-gray-200 ${currentPage === page ? "bg-gray-500 text-white font-bold" : "text-black cursor-pointer"}`}
          >
            {page}
          </button>
        )
      )}

      {/* Nút Tiếp */}
      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 border ${currentPage === totalPages ? "border-gray-200 bg-gray-200 text-gray-400" : "bg-black text-white cursor-pointer"}`}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
