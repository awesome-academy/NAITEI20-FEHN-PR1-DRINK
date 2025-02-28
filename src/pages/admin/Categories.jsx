import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import ComponentCard from "../../components/ComponentCard";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../components/ui/table/Table";
import Button from "../../components/ui/button/ButtonAdmin";
import Input from "../../components/ui/form/input/InputField.jsx";
import Label from "../../components/ui/form/Label.jsx";
import Select from "../../components/ui/form/Select.jsx";
import ActionButton from "../../components/admin/ActionButton";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { categories } from "../../data/dummyData";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal/Modal";

export default function Categories() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const levelColors = [
    "bg-white",
    "bg-green-100", 
    "bg-yellow-100",
    "bg-red-100",
    "bg-purple-100", 
    "bg-blue-100", 
  ];

  const getCategoryBgColor = (level) => levelColors[level] || "bg-gray-200";

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    openModal();
  };

  const getAllSubcategoryIds = (category) => {
    let ids = new Set();
    
    if (!category) return ids;
  
    const collectIds = (cat) => {
      ids.add(cat.id);
      if (cat.subcategories && cat.subcategories.length > 0) {
        cat.subcategories.forEach(collectIds);
      }
    };
  
    collectIds(category);
    return ids;
  };
  
  const validParentCategories = categories.filter((cat) => {
    if (!selectedCategory) return true; 
  
    const invalidIds = getAllSubcategoryIds(selectedCategory); 
    invalidIds.add(selectedCategory.id);
    return !invalidIds.has(cat.id);
  });

  const [categoryName, setCategoryName] = useState("");
  const [parentCategory, setParentCategory] = useState("");
  const [newSubcategory, setNewSubcategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      setCategoryName(selectedCategory.name || "");
      setParentCategory(selectedCategory.parent?.id || ""); 
      setSubcategories(selectedCategory.subcategories || []);
    }
  }, [selectedCategory]);    

  const handleAddSubcategory = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    setSubcategories((prev) => [
      ...prev,
      { id: Date.now(), name: "", count: 0, subcategories: [] },
    ]);
  };  
  
  const handleSubcategoryChange = (index, value) => {
    const updatedSubcategories = [...subcategories];
    updatedSubcategories[index].name = value;
    setSubcategories(updatedSubcategories);
  };
  
  const handleSave = () => {
    console.log("Saving category:", {
      name: categoryName,
      parent: parentCategory || null,
      subcategories,
    });
    closeModal();
  };

  const renderCategoryRow = (category, level = 0, keyPrefix = "") => {
    const hasSubcategories = category.subcategories.length > 0;
    const isExpanded = expandedCategories[category.id];
  
    return (
      <>
        <TableRow key={`${keyPrefix}-${category.id}`} className={`text-black ${getCategoryBgColor(level)}`}>
          <TableCell className="px-5 py-4 text-start">
            <div
              className={`flex items-center gap-2 text-lg ${
                hasSubcategories ? "hover:text-yellow-500 cursor-pointer" : ""
              }`}
              style={{ paddingLeft: `${level * 20}px` }}
              onClick={() => hasSubcategories && toggleCategory(category.id)}
            >
              {hasSubcategories && (isExpanded ? <FaChevronDown /> : <FaChevronRight />)}
              {category.name}
            </div>
          </TableCell>
          <TableCell className="px-4 py-3 text-gray-500 text-center">{category.subcategories.length}</TableCell>
          <TableCell className="px-4 py-3 text-gray-500 text-center">{category.count}</TableCell>
          <TableCell className="px-4 py-3">
            <ActionButton onEdit={() => handleEdit(category)} />
          </TableCell>
        </TableRow>
        {isExpanded &&
          category.subcategories.map((sub, index) =>
            renderCategoryRow(sub, level + 1, `${keyPrefix}-${category.id}-${index}`)
          )}
      </>
    );
  };  

  return (
    <>
      <PageBreadcrumb pageTitle="Danh mục" className="text-black" />
      <ComponentCard title="Danh mục sản phẩm">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
          <div className="max-w-full overflow-x-auto">
            <div className="min-w-[600px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell isHeader className="px-5 py-3 text-gray-500 text-start">Danh mục</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-gray-500 text-center">Mục con</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-gray-500 text-center">Sản phẩm</TableCell>
                    <TableCell isHeader className="px-5 py-3 text-gray-500 text-center"></TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>{categories.map((category) => renderCategoryRow(category))}</TableBody>
              </Table>
            </div>
          </div>
        </div>
      </ComponentCard>

      <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[600px]">
        <div className="relative w-full max-w-[600px] overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900">
          <h4 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-white/90">Chỉnh sửa danh mục</h4>
          <form className="flex flex-col gap-y-5">
            <div className="flex gap-6">
              <div>
                <Label>Tên danh mục</Label>
                <Input type="text" value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
              </div>
              <div>
                <Label>Danh mục cha</Label>
                <Select 
                  value={parentCategory} 
                  onChange={(value) => setParentCategory(value)}
                  options={[
                    { value: "", label: "Không có" },
                    ...validParentCategories.map((cat) => ({ value: cat.id, label: cat.name }))
                  ]}
                />
              </div>
            </div>
            <div>
              <Label>Danh mục con</Label>
              <div className="grid grid-cols-2 gap-4">
                {subcategories.map((sub, index) => (
                  <Input key={index} type="text" value={sub.name} onChange={(e) => handleSubcategoryChange(index, e.target.value)}/>
                ))}
              </div>
            </div>
            <div  className="flex justify-end gap-6">
              <Button onClick={handleAddSubcategory}>Thêm danh mục con</Button>
              <Button onClick={handleSave}>Lưu thay đổi</Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
