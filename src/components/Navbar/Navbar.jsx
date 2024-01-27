import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContext";
import { useProductContext } from "../../contexts/productContext";
import { toast } from 'react-toastify';
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.";
import {useWishList} from "../../contexts/WishListContext";
export const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { findProduct,searchQuery } = useProductContext();
  const {cartItems} = useContext(CartContext);
  const {wishList} = useWishList();
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.clear();
    toast.success("Logged Out");    
  };
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
  
        <button className="btn-badge">
          <NavLink className="btn-cart-icon link" to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>
          {cartItems.length>0 ? <span className="count">{cartItems.length}</span> :  <span></span>}
          
        </button> 

        <button className="btn-badge">
          <NavLink className="btn-cart-icon link" to="/wishlist">
            <i className="fas fa-heart"></i>
          </NavLink>
          {wishList.length>0 ? <span className="count">{wishList.length}</span> :  <span></span>}
          
        </button> 
        <input type="text" onChange={(e) => findProduct(e)} value={searchQuery} />

        <NavLink className="nav-link" to="/login">
          {isLoggedIn ? (
            <span onClick={logoutHandler}>Logout</span>
          ) : (
            <span>Login</span>
          )}
        </NavLink>

     
      </ul>
    </nav>
  );
};
