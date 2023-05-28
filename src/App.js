import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { ProductDetail } from "./pages/ProductDetail";
import { Login } from "./pages/LoginSignup";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/productDetail" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
