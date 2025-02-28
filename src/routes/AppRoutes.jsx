import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail"
import BlogList from "../pages/BlogList";
import BlogDetail from "../pages/BlogDetail";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import About from "../pages/About";
import NotFound from "../pages/404";

const AppRoutes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/blogs" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
