import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
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
    </div>
  );
};
