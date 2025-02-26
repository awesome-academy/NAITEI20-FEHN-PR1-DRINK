import { useState, useEffect, useRef } from "react";
import { useSearchParams, Link } from "react-router-dom";
import ProductListSmall from "../components/product-list/ProductListSmall";
import ProductListLarge from "../components/product-list/ProductListLarge";
import PaginationWithViewToggle from "../components/product-list/PaginationWithViewToggle";
import Filter from "../components/product-list/Filter";
import slide from "../assets/images/slide.jpg";
import product1 from "../assets/products/1.jpg";
import product2 from "../assets/products/2.jpg";
import product3 from "../assets/products/3.jpg";
import product4 from "../assets/products/4.jpg";
import product5 from "../assets/products/5.jpg";
import product6 from "../assets/products/6.jpg";
import product7 from "../assets/products/7.jpg";
import product8 from "../assets/products/8.jpg";
import product9 from "../assets/products/9.jpg";
import product10 from "../assets/products/10.jpg";
import product11 from "../assets/products/11.jpg";
import product12 from "../assets/products/12.jpg";
import product13 from "../assets/products/13.jpg";
import product14 from "../assets/products/14.jpg";
import { FaX } from "react-icons/fa6";

const product_pages = "Rượu vang đỏ";
const images = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
];

const categories = [
  {
    name: "RƯỢU NGOẠI",
    subcategories: [
      { name: "Rượu Chivas", count: 26 },
      {
        name: "Hàng độc - Rượu độc đáo",
        count: 36,
        children: [{ name: "Johnnie Walker", count: 46 }],
      },
      { name: "Rượu Whisky", count: 24 },
      { name: "Rượu Remy Martin", count: 16 },
    ],
  },
  {
    name: "RƯỢU VANG",
    subcategories: [
      { name: "Rượu Vang Pháp", count: 44 },
      { name: "Rượu Vang Úc", count: 34 },
    ],
  },
];

const tags = ["Sale", "Mới", "Hot"];
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getRandomPrice = () => {
  let price = Math.floor(Math.random() * 1000000) + 300000;
  return { price, oldPrice: price + Math.floor(Math.random() * 300000) };
};

const createProduct = (
  id,
  name,
  category,
  subcategory,
  tag,
  image,
  price,
  oldPrice,
  description,
) => ({
  id,
  name,
  category,
  subcategory,
  tag,
  image,
  price,
  oldPrice,
  description,
});

const products = [];
let productId = 1;
categories.forEach((category) => {
  category.subcategories.forEach((sub) => {
    const numProducts = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i < numProducts; i++) {
      const { price, oldPrice } = getRandomPrice();
      products.push(
        createProduct(
          productId++,
          `${sub.name} Special ${i + 1}`,
          category.name,
          sub.name,
          getRandomItem(tags),
          getRandomItem(images),
          price,
          oldPrice,
          `Thông tin chi tiết về ${sub.name} Special ${i + 1}. Rượu ${sub.name} Special ${i + 1} mang đến hương vị ngọt ngào của trái cây, kết hợp với một chút cay nồng và hương gỗ sồi, tạo nên một trải nghiệm tuyệt vời và đầy chiều sâu.`,
        ),
      );
    }
  });
});

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
