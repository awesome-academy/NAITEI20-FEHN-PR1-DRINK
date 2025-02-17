import { useState } from "react";
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

const product_pages = "Rượu vang đỏ";
const images = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14];

const categories = [
  {
    name: "RƯỢU NGOẠI",
    subcategories: [
      { name: "Rượu Chivas", count: 26 },
      { name: "Hàng độc - Rượu độc đáo", count: 36, children: [{ name: "Johnnie Walker", count: 46 }] },
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

const createProduct = (name, category, subcategory, tag, image, price, oldPrice, description) => ({
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
categories.forEach((category) => {
  category.subcategories.forEach((sub) => {
    const numProducts = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i < numProducts; i++) {
      const { price, oldPrice } = getRandomPrice();
      products.push(
        createProduct(
          `${sub.name} Special ${i + 1}`,
          category.name,
          sub.name,
          getRandomItem(tags),
          getRandomItem(images),
          price,
          oldPrice,
          `Thông tin chi tiết về ${sub.name} Special ${i + 1}. Rượu ${sub.name} Special ${i + 1} mang đến hương vị ngọt ngào của trái cây, kết hợp với một chút cay nồng và hương gỗ sồi, tạo nên một trải nghiệm tuyệt vời và đầy chiều sâu.`
        )
      );
    }
  });
});

const ProductList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("grid");
  const PAGE_SIZE_SMALL = 9;
  const PAGE_SIZE_LARGE = 4;

  const PAGE_SIZE = viewMode === "grid" ? PAGE_SIZE_SMALL : PAGE_SIZE_LARGE;

  // State cho filter
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

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
        <p className="text-gray-600 text-sm mb-4">Trang chủ / Sản phẩm / <span className="text-yellow-500">{product_pages}</span></p>
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
