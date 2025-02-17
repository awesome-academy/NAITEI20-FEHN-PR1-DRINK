import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "../pages/ProductList";
import Layout from "../components/Layout";

const AppRoutes = () => {
  return (
    <Layout>
    <Router>
        <Routes>
          <Route path="/" element={<ProductList />} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default AppRoutes;
