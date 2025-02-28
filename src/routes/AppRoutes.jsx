import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;
