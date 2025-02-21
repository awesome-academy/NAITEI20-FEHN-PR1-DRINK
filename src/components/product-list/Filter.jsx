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
    <div className="h-screen w-64 overflow-y-scroll pr-4 text-gray-700">
      {/* Danh mục sản phẩm */}
      <h2 className="pb-2 text-lg font-bold">DANH MỤC SẢN PHẨM</h2>
      <div className="flex items-center gap-10">
        <img src={arrow} alt=" " className="flex-shrink-0" />
        <button
          onClick={() => {
            onCategorySelect(null);
            onTagSelect(null);
          }}
          className="flex cursor-pointer items-center gap-2 text-gray-400 hover:font-bold hover:text-yellow-500"
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
                    className={`block w-full cursor-pointer text-left hover:text-yellow-500 ${
                      selectedCategory === sub.name
                        ? "font-semibold text-yellow-500"
                        : ""
                    }`}
                    onClick={() => onCategorySelect(sub.name)}
                  >
                    {sub.name} ({sub.count})
                  </button>

                  {/* Hiển thị danh mục con nếu có */}
                  {sub.children && (
                    <ul className="mt-1 ml-4 list-disc space-y-1 text-xs text-gray-600">
                      {sub.children.map((child) => (
                        <li key={child.name} className="pl-2">
                          <button
                            className={`-ml-2 block w-full cursor-pointer text-left hover:text-yellow-500 ${
                              selectedCategory === child.name
                                ? "font-semibold text-yellow-500"
                                : ""
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
      <h2 className="mt-6 pb-2 text-lg font-bold">SO SÁNH SẢN PHẨM</h2>
      <img src={arrow} alt=" " />
      <p className="mt-6 text-sm text-gray-500">
        Bạn chưa có sản phẩm nào để so sánh
      </p>

      {/* Tag sản phẩm */}
      <h2 className="mt-6 pb-2 text-lg font-bold">TAG SẢN PHẨM</h2>
      <img src={arrow} alt=" " />
      <div className="mt-6 flex flex-wrap gap-2">
        {prod_tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`border px-2 text-sm ${
              selectedTag === tag
                ? "border-yellow-500 bg-yellow-500 text-white"
                : "cursor-pointer border-gray-300 hover:bg-gray-200"
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
