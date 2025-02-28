import { useState } from "react";
import PageBreadcrumb from "../../components/PageBreadcrumb";
import ComponentCard from "../../components/ComponentCard";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../components/ui/table/Table";
import ActionButton from "../../components/admin/ActionButton";
import { products, categories, prod_tags } from "../../data/dummyData";
import Pagination from "../../components/Pagination"; // Import component Pagination
import { Modal } from "../../components/ui/modal/Modal";
import Input from "../../components/ui/form/input/InputField";
import Label from "../../components/ui/form/Label";
import Button from "../../components/ui/button/ButtonAdmin";
import Select from "../../components/ui/form/Select";

import thumb from "../../assets/images/thumb.jpg";

const ITEMS_PER_PAGE = 20;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính tổng số trang
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  // Cắt danh sách sản phẩm theo trang hiện tại
  const displayedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Định dạng giá tiền VND
  const formatPrice = (price) =>
    new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(price);

  const [productList, setProductList] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  // Xử lý khi chọn ảnh mới
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const getCategoryOptions = (categories, depth = 0) => {
    return categories.flatMap((category) => [
      { label: `${"--".repeat(depth)} ${category.name}`, value: category.id },
      ...(category.subcategories ? getCategoryOptions(category.subcategories, depth + 1) : []),
    ]);
  };
  
  const categoryOptions = getCategoryOptions(categories);

  return (
    <>
      <PageBreadcrumb pageTitle="Sản phẩm" />
      <ComponentCard title={`Sản phẩm (${products.length})`} className="text-black">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-900">
            <div className="max-w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell isHeader className="w-1/15 text-center">ID</TableCell>
                    <TableCell isHeader className="w-3/15 text-center">Hình ảnh</TableCell>
                    <TableCell isHeader className="w-4/15">Tên sản phẩm</TableCell>
                    <TableCell isHeader className="w-3/15 text-center">Danh mục</TableCell>
                    <TableCell isHeader className="w-1/15 text-center">Tag</TableCell>
                    <TableCell isHeader className="w-3/15 text-center">Giá</TableCell>
                    <TableCell isHeader className="w-3/15 text-center">Thao tác</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody className="space-y-4">
                  {displayedProducts.map((product) => (
                    <TableRow key={product.id} className="border-b border-gray-200">
                      <TableCell className="w-1/15 text-center">{product.id}</TableCell>
                      <TableCell className="w-3/15 text-center">
                        <div className="flex justify-center items-center">
                          <img
                            src={product.image || thumb}
                            alt={product.name}
                            className="w-20 h-auto object-cover"
                            onError={(e) => (e.target.src = thumb)}
                          />
                        </div>
                      </TableCell>
                      <TableCell className="w-4/15">{product.name}</TableCell>
                      <TableCell className="w-3/15 text-center">{product.category}</TableCell>
                      <TableCell className="w-1/15 text-center">{product.tag}</TableCell>
                      <TableCell className="w-3/15 text-center text-green-500">
                        {formatPrice(product.price)}
                      </TableCell>
                      <TableCell className="w-3/15 text-center">
                        <ActionButton onEdit={() => openModal(product)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Thêm Pagination */}
          <Pagination
            totalItems={products.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            paginate={setCurrentPage}
          />
        </div>
      </ComponentCard>

      {selectedProduct && (
        <Modal isOpen={isOpen} onClose={closeModal} className="m-4 max-w-[700px] text-black">
        <div className="no-scrollbar relative w-full max-w-[700px] overflow-y-auto rounded-3xl bg-white p-4 lg:p-11 dark:bg-gray-900">
          <h4 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white/90">Chỉnh sửa sản phẩm</h4>
          <form className="flex flex-col">
            <div className="custom-scrollbar h-[470px] overflow-y-auto px-2 pb-3 space-y-4">
              
              {/* ID & Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>ID</Label>
                  <Input type="text" value={selectedProduct.id} disabled />
                </div>
                <div>
                  <Label>Tên sản phẩm</Label>
                  <Input
                    type="text"
                    value={selectedProduct.name}
                    onChange={(e) =>
                      setSelectedProduct((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
              </div>
      
              {/* Hình ảnh */}
              <div>
                <Label>Hình ảnh</Label>
                <div className="flex items-center gap-4">
                  <img
                    src={selectedImage || selectedProduct.image}
                    alt="Preview"
                    className="w-20 h-auto object-cover"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className=""
                  />
                </div>
              </div>
      
              {/* Danh mục & Tag */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Danh mục</Label>
                  <Select
                    options={categoryOptions}
                    value={categoryOptions.find(
                      (opt) => opt.value === selectedProduct.category || opt.value === selectedProduct.subcategory
                    )}
                    onChange={(newValue) => {
                      const findCategory = (cats, value) => {
                        for (let cat of cats) {
                          if (cat.id === value) return { category: value, subcategory: null };
                          if (cat.subcategories) {
                            const result = findCategory(cat.subcategories, value);
                            if (result) return { category: cat.id, subcategory: value };
                          }
                        }
                        return null;
                      };

                      const selected = findCategory(categories, newValue.value);
                      setSelectedProduct((prev) => ({
                        ...prev,
                        category: selected.category,
                        subcategory: selected.subcategory,
                      }));
                    }}
                  />
                </div>
                <div>
                  <Label>Tag</Label>
                  <Select className="text-black"
                    options={prod_tags.map((tag) => ({ label: tag.name, value: tag.id }))}
                    value={prod_tags.find((tag) => tag.id === selectedProduct.tag)}
                    onChange={(newValue) =>
                      setSelectedProduct((prev) => ({ ...prev, tag: newValue.value }))
                    }
                  />

                </div>
              </div>
      
              {/* Giá & Giá cũ */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Giá</Label>
                  <Input type="number" value={selectedProduct.price} onChange={(e) =>
                      setSelectedProduct((prev) => ({ ...prev, price: e.target.value }))
                    }/>
                </div>
                <div>
                  <Label>Giá cũ</Label>
                  <Input type="number" value={selectedProduct.oldPrice} onChange={(e) =>
                      setSelectedProduct((prev) => ({ ...prev, oldPrice: e.target.value }))
                    }/>
                </div>
              </div>
      
              {/* Mô tả */}
              <div>
                <Label>Mô tả</Label>
                <textarea
                  value={selectedProduct.description}
                  onChange={(e) =>
                    setSelectedProduct((prev) => ({ ...prev, description: e.target.value }))
                  }
                  className="w-full border rounded-lg border-gray-200 p-2 h-20"
                />
              </div>
      
            </div>
            
            <div className="mt-6 flex items-center gap-3 px-2 lg:justify-end">
              <Button size="sm" variant="outline" onClick={closeModal}>Đóng</Button>
              <Button size="sm" onClick={() => console.log("Saving changes...")}>Lưu thay đổi</Button>
            </div>
          </form>
        </div>
      </Modal>      
      )}
    </>
  );
}
