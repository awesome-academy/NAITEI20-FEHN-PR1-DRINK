import { useState, useEffect } from "react";
import ProductCardSmall from "../components/product-card/ProductCardSmall";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductSlider = ({ products }) => {
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  // Function to update itemsPerPage based on screen width
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth <= 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(4);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Update displayed products when itemsPerPage changes
  useEffect(() => {
    if (products.length > 0) {
      setDisplayedProducts([
        ...products.slice(-itemsPerPage),
        ...products,
        ...products.slice(0, itemsPerPage),
      ]);
      setCurrentIndex(itemsPerPage); // Reset index when layout updates
    }
  }, [products, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  useEffect(() => {
    const totalSlides = displayedProducts.length;
    if (currentIndex >= totalSlides - itemsPerPage) {
      setTimeout(() => {
        setCurrentIndex(itemsPerPage);
      }, 500);
    }
    if (currentIndex < 0) {
      setTimeout(() => {
        setCurrentIndex(totalSlides - 2 * itemsPerPage);
      }, 500);
    }
  }, [currentIndex, displayedProducts.length, itemsPerPage]);

  return (
    <div className="relative mx-auto w-full max-w-[240px] md:max-w-[960px]">
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-10 z-20 -translate-y-1/2"
      >
        <FaArrowLeft className="text-lg hover:text-yellow-500 sm:text-xl" />
      </button>

      <div className="relative overflow-hidden">
        <div
          className="flex w-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {displayedProducts.map((product, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/4">
              <ProductCardSmall {...product} />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-10 z-20 -translate-y-1/2"
      >
        <FaArrowRight className="text-lg hover:text-yellow-500 sm:text-xl" />
      </button>
    </div>
  );
};

export default ProductSlider;
