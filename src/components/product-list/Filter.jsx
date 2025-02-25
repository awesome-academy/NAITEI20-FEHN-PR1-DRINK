import { useState } from "react";
import arrow from "../../assets/images/arrow.png";
import vineyards from "../../assets/images/vineyards.jpg";
import { IoReload } from "react-icons/io5";
import { categories, prod_tags } from "../../data/dummyData";

const Filter = ({
  selectedCategory,
  onCategorySelect,
  selectedTag,
  onTagSelect,
}) => {
  return (
    <div className="w-64 pr-4 text-gray-700">
      {/* Danh mục sản phẩm */}
      <h2 className="font-bold text-lg pb-2">DANH MỤC SẢN PHẨM</h2>
      <div className="flex items-center gap-10">
        <img src={arrow} alt=" " className="flex-shrink-0" />
        <button
          onClick={() => {
            onCategorySelect(null);
            onTagSelect(null);
          }}
          className="flex items-center gap-2 text-gray-400 cursor-pointer hover:text-yellow-500 hover:font-bold"
        >
          <IoReload className="text-xl" />
          <span>Clear Filters</span>
        </button>
      </div>
      <ul className="mt-6 space-y-1">
        {categories.map((category) => (
          <li key={category.name}>
            <span className="uppercase">{category.name}</span>
            <ul className="space-y-1">
              {category.subcategories.map((sub) => (
                <li key={sub.name} className="text-sm">
                  <button
                    className={`block w-full text-left cursor-pointer hover:text-yellow-500 ${
                      selectedCategory === sub.name ? "text-yellow-500 font-semibold" : ""
                    }`}
                    onClick={() => onCategorySelect(sub.name)}
                  >
                    {sub.name} ({sub.count})
                  </button>
                
                  {/* Hiển thị danh mục con nếu có */}
                  {sub.children && (
                    <ul className="ml-4 mt-1 space-y-1 list-disc text-xs text-gray-600">
                      {sub.children.map((child) => (
                        <li key={child.name} className="pl-2">
                          <button
                            className={`block -ml-2 w-full text-left cursor-pointer hover:text-yellow-500 ${
                              selectedCategory === child.name ? "text-yellow-500 font-semibold" : ""
                            }`}
                            onClick={() => onCategorySelect(child.name)}
                          >
                            {child.name} ({child.count})
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* So sánh sản phẩm */}
      <h2 className="font-bold text-lg pb-2 mt-6">SO SÁNH SẢN PHẨM</h2>
      <img src={arrow} alt=" " />
      <p className="mt-6 text-sm text-gray-500 mt-2">Bạn chưa có sản phẩm nào để so sánh</p>

      {/* Tag sản phẩm */}
      <h2 className="font-bold text-lg pb-2 mt-6">TAG SẢN PHẨM</h2>
      <img src={arrow} alt=" " />
      <div className="mt-6 flex flex-wrap gap-2">
        {prod_tags.map((tag) => (
          <button key={tag} onClick={() => onTagSelect(tag)} className={`px-2 text-sm border
            ${
              selectedTag === tag
                ? "bg-yellow-500 text-white border-yellow-500"
                : "border-gray-300 cursor-pointer hover:bg-gray-200"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      <img src={vineyards} alt=" " className="mt-8" />
    </div>
  );
};

export default Filter;
