import { useState, useEffect } from "react";
import { useSearchParams , Link } from "react-router-dom";
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
    let matchCategory = !selectedCategory || p.category === selectedCategory || p.subcategory === selectedCategory;
    let matchTag = !selectedTag || p.tag === selectedTag;
    return matchCategory && matchTag;
  });

  // Cập nhật phân trang
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  return (
    <div className="container mx-auto p-4">
      <div className="mb-10">
        <nav className="text-sm text-gray-600 mb-4">
          <Link to="/" className="text-gray-500 hover:text-black">
            Trang chủ
          </Link>{" "}
          /
          <Link to="/" className="text-gray-500 hover:text-black">
            {" "}
            Sản phẩm
          </Link>{" "}
          /<span className="text-yellow-500">{product_pages}</span>
        </nav>
        <img src={slide} alt=" " className="w-full h-65 object-cover" />
      </div>
      <div className="flex">
        <div className="w-1/4">
          <Filter
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            selectedTag={selectedTag}
            onTagSelect={handleTagSelect}
          />
        </div>
        <div className="flex-1 w-200">
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
    </div>
  );
};

export default ProductList;
