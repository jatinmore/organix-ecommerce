import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/product">
        Product
      </NavLink>
      <NavLink className="nav-link" to="/cart">
        Cart
      </NavLink>
      <NavLink className="nav-link" to="/wishlist">
        Wishlist
      </NavLink>
      <NavLink className="nav-link" to="/login">
        Login
      </NavLink>
    </nav>
  );
};
