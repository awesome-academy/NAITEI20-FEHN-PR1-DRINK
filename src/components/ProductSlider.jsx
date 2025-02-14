import { useState, useEffect } from "react";
import ProductCardSmall from "../components/product-card/ProductCardSmall";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductSlider = ({ products }) => {
  const itemsPerPage = 4;
  const [currentIndex, setCurrentIndex] = useState(itemsPerPage);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts([
      ...products.slice(-itemsPerPage),
      ...products,
      ...products.slice(0, itemsPerPage),
    ]);
  }, [products]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    if (currentIndex >= displayedProducts.length - itemsPerPage) {
      setTimeout(() => {
        setCurrentIndex(itemsPerPage);
      }, 500);
    }
    if (currentIndex <= 0) {
      setTimeout(() => {
        setCurrentIndex(displayedProducts.length - 2 * itemsPerPage);
      }, 500);
    }
  }, [currentIndex, displayedProducts.length]);

  return (
    <div className="relative mx-auto w-full max-w-[960px]">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-10 z-20 -translate-y-1/2"
      >
        <FaArrowLeft className="hover:text-yellow-500" />
      </button>

      <div className="relative overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {displayedProducts.map((product, index) => (
            <div key={index} className={`w-1/${itemsPerPage}`}>
              <ProductCardSmall {...product} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-10 z-20 -translate-y-1/2"
      >
        <FaArrowRight className="hover:text-yellow-500" />
      </button>
    </div>
  );
};

export default ProductSlider;
