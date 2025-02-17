import { FaTh, FaList } from "react-icons/fa";

const PaginationWithViewToggle = ({ currentPage, totalPages, onPageChange, viewMode, onToggleView }) => {
  const handleToggleView = (mode) => {
    onToggleView(mode);
    onPageChange(1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Nếu tổng số trang <= 7, hiển thị tất cả các trang
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Trường hợp ở trang 1, 2, 3, 4: hiển thị 1 2 3 4 5 ... last
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
      // Trường hợp ở giữa (5 đến last - 4): hiển thị 1 ... current-1 current current+1 ... last
      else if (currentPage > 4 && currentPage < totalPages - 3) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
      // Trường hợp ở trang cuối (last - 4 đến last): hiển thị 1 ... last-4 last-3 last-2 last-1 last
      else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      }
    }

    // Đảm bảo số lượng phần tử không vượt quá 7
    return pageNumbers.slice(0, 7);
  };

  return (
    <div className="flex justify-between items-center px-2 border border-gray-200">
      <div className="flex gap-2">
        <button className={`p-2 rounded ${viewMode === "grid" ? "text-orange-500" : "text-gray-300 cursor-pointer hover:text-gray-500"}`} onClick={() => handleToggleView("grid")}>
          <FaTh size={16} />
        </button>
        <button className={`p-2 rounded ${viewMode === "list" ? "text-orange-500" : "text-gray-300 cursor-pointer hover:text-gray-500"}`} onClick={() => handleToggleView("list")}>
          <FaList size={16} />
        </button>
      </div>
      <div className="flex items-center gap-3 text-gray-500">
        <button className="text-sm disabled:text-gray-200" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          &lt;
        </button>
        {renderPageNumbers().map((page, index) =>
          page === "..." ? (
            <span key={index} className="text-sm text-gray-400">...</span>
          ) : (
            <button
              key={index}
              className={`text-sm ${currentPage === page ? "text-orange-500 text-lg font-bold" : "text-gray-400 cursor-pointer hover:text-gray-500"}`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          )
        )}
        <button className="text-sm disabled:text-gray-200" disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PaginationWithViewToggle;
