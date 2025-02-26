import { useState } from "react";
import arrow from "../../assets/images/arrow.png";
import vineyards from "../../assets/images/vineyards.jpg";
import { IoReload } from "react-icons/io5";

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
      { name: "Rượu Glenmorangie", count: 11 },
      { name: "Rượu Ballantine's", count: 7 },
      { name: "Rượu Cognac", count: 40 },
      { name: "Rượu Vodka", count: 9 },
      { name: "Rượu Macallan", count: 19 },
      { name: "Rượu Brandy", count: 27 },
      { name: "Rượu Hennessy", count: 20 },
      { name: "RượuGin - Tequila - Liqueur - Rượu mùi", count: 36 },
      { name: "Rượu Champagne", count: 12 },
      { name: "Rượu Single malt Scotch whisky", count: 47 },
      { name: "Rượu Spirits", count: 4 },
    ],
  },
  {
    name: "RƯỢU VANG",
    subcategories: [
      { name: "Rượu Vang Pháp", count: 44 },
      { name: "Rượu Vang Úc", count: 34 },
      { name: "Rượu Vang Mỹ", count: 16 },
      { name: "Rượu Vang ChiLê", count: 48 },
      { name: "Rượu Vang Philip", count: 1 },
      { name: "Rượu Vang Nam Phi", count: 20 },
      { name: "Rượu Vang Ý", count: 2 },
    ],
  },
];

const tags = ["Sale", "Mới", "Hot"];

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
        {tags.map((tag) => (
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
