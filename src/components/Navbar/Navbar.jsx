import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContext";
export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <nav className="nav grid fixed bg-light box-shadow">
      <p className="brand">Organix</p>

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
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)}>Logout</button>
          ) : (
            <button>Login</button>
          )}
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
