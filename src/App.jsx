import Header from "./components/Header";
import { Button } from "./components/Button";
import BlogCard from "./components/BlogCard";

function App() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center space-y-4 bg-white text-center">
        <Button>ADD TO CART</Button>
        <Button size="lg">ĐĂNG NHẬP</Button>
        <BlogCard />

        <div class="triangle"></div>
      </main>
    </>
  );
}

export default App;
