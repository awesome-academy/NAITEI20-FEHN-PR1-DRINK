import Header from "./components/Header";
import { Button } from "./components/Button";
import BlogCard from "./components/BlogCard";
import ProductCardSmall from "./components/product-card/ProductCardSmall";
import product1 from "./assets/products/product1.jpg"

function App() {
  const products = [
    { tag: "Sale", image: product1, name: "RƯỢU VANG ĐÀ LẠT", price: 370000, oldPrice: 450000 },
    { tag: "Mới", image: product1, name: "RƯỢU VANG ĐÀ LẠT", price: 370000, oldPrice: 450000 },
    { tag: "Hot", image: product1, name: "RƯỢU VANG ĐÀ LẠT", price: 370000, oldPrice: 450000 },
  ];

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-white text-center">
        <Button>ADD TO CART</Button>
        <Button size="lg">ĐĂNG NHẬP</Button>
        <BlogCard />
        <div className="flex">
          {products.map((product, index) => (
            <ProductCardSmall key={index} {...product} />
          ))}
        </div>;
        <div class="triangle"></div>
      </main>
    </>
  );
}

export default App;
