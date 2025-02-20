import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList";
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <Layout>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default AppRoutes;
