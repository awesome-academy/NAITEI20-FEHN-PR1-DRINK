import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>  
    </BrowserRouter>
  );
}

export default App;
