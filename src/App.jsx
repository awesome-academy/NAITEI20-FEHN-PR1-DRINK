import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductDetail from "./pages/ProductDetail";
import Orders from "./pages/Orders";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import NotFound from "./pages/404";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <NotFound />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/products/:id"
          element={
            <>
              <Header />
              <ProductDetail />
              <Footer />
            </>
          }
        />
        <Route
          path="/orders"
          element={
            <>
              <Header />
              <Orders />
              <Footer />
            </>
          }
        />
        <Route
          path="/sign-in"
          element={
            <>
              <Header />
              <SignIn />
              <Footer />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
