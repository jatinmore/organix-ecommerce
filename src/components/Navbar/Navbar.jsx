import { NavLink } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="nav grid fixed bg-light box-shadow">
      <a className="brand">Organix</a>

      <ul>
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

        {/* <button className="btn-badge">
          <NavLink className="btn-cart-icon link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
          <span className="count">4</span>
        </button> */}
      </ul>
    </nav>
  );
};
