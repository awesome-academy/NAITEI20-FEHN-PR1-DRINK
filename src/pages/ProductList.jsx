import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductListSmall from "../components/product-list/ProductListSmall";
import ProductListLarge from "../components/product-list/ProductListLarge";
import PaginationWithViewToggle from "../components/product-list/PaginationWithViewToggle";
import Filter from "../components/product-list/Filter";
import slide from "../assets/images/slide.jpg";
import { products } from "../data/dummyData";

const product_pages = "Rượu vang đỏ";

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const filterRef = useRef(null);
  const footerRef = useRef(null);

  const PAGE_SIZE_SMALL = 9;
  const PAGE_SIZE_LARGE = 4;

  const PAGE_SIZE = viewMode === "grid" ? PAGE_SIZE_SMALL : PAGE_SIZE_LARGE;

  // State cho filter
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category") || null;
  const [selectedCategory, setSelectedCategory] = useState(categoryFromUrl);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    setSelectedCategory(searchParams.get("category") || null);
    setCurrentPage(1);
  }, [searchParams]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleTagSelect = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  // Reset bộ lọc
  const handleClearFilter = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setCurrentPage(1);
  };

  // Lọc sản phẩm theo danh mục và tag
  const filteredProducts = products.filter((p) => {
    let matchCategory =
      !selectedCategory ||
      p.category === selectedCategory ||
      p.subcategory === selectedCategory;
    let matchTag = !selectedTag || p.tag === selectedTag;
    return matchCategory && matchTag;
  });

  // Cập nhật phân trang
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!filterRef.current || !footerRef.current) return;

      const filterRect = filterRef.current.getBoundingClientRect();
      const footerRect = footerRef.current.getBoundingClientRect();

      if (filterRect.bottom > 0 && footerRect.top > window.innerHeight) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container mx-auto p-4 md:px-64">
      <div className="mb-10">
        <nav className="mb-4 text-sm text-gray-600">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          /
          <Link to="/" className="text-gray-500 hover:text-black">
            {" "}
            Sản phẩm
          </Link>{" "}
          /<span className="text-yellow-500"> {product_pages}</span>
        </nav>
        <img src={slide} alt=" " className="h-32 w-full object-cover md:h-65" />
      </div>
      <div ref={filterRef} className="flex">
        {/* Desktop Filter */}
        <div className="hidden w-1/4 md:block">
          <Filter
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            selectedTag={selectedTag}
            onTagSelect={handleTagSelect}
          />
        </div>
        {/* Mobile Filter Drawer */}
        {isFilterOpen && (
          <div className="bg-opacity-50 fixed inset-0 z-50 flex justify-end bg-gray-900">
            <div className="h-full w-3/4 bg-white p-4">
              <button
                className="mb-4 cursor-pointer"
                onClick={() => setIsFilterOpen(false)}
              >
                <FaX className="text-gray-800" />
              </button>
              <Filter
                selectedCategory={selectedCategory}
                onCategorySelect={handleCategorySelect}
                selectedTag={selectedTag}
                onTagSelect={handleTagSelect}
              />
            </div>
          </div>
        )}

        <div className="w-200 flex-1">
          <PaginationWithViewToggle
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            viewMode={viewMode}
            onToggleView={setViewMode}
          />
          <div className="mt-6 grid">
            {viewMode === "grid" ? (
              <ProductListSmall products={currentProducts} />
            ) : (
              <ProductListLarge products={currentProducts} />
            )}
          </div>
        </div>
      </div>

      <div ref={footerRef}></div>

      {isFixed && (
        <button
          className="fixed inset-x-0 right-0 bottom-10 left-0 z-20 m-auto w-fit rounded-sm bg-yellow-500 px-8 py-2 text-white shadow-xl md:hidden"
          onClick={() => setIsFilterOpen(true)}
        >
          Filter
        </button>
      )}
    </div>
  );
};

export default ProductList;
