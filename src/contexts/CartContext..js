import { useContext } from "react";
import { createContext } from "react";
import { ProductContext } from "./productContext";
import { useReducer } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const accessToken = localStorage.getItem("accessToken");
  const { data } = useContext(ProductContext);
  const { isLoggedIn } = useAuth();

  const cart = {
    data,
    total: 0,
    quantity: 0,
    cartItems: [],
  };
  const CartReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        console.log(action.payload);
        return {
          ...state,
          quantity: state.quantity + 1,
          cartItems: [
            //...state.data.filter((p) => p.id === action.payload.id),
            ...state.cartItems,
            action.payload,
          ],
          total: state.total + action.payload.price,
        };

      case "REMOVE":
        return {
          ...state,
          quantity: state.quantity - 1,
          cartItems: [
            ...state.cartItems.filter((p) => p.id !== action.payload.id),
          ],
          total: state.total - action.payload.price,
        };
      case "INC_QTY":
        return {
          ...state,
          cartItems: [...state, { qty: action.payload.qty + 1 }],
        };

      case "DEC_QTY":
        return {
          ...state,
          cartItems: [{ qty: action.payload.qty - 1 }],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(CartReducer, cart);

  return (
    <CartContext.Provider value={{ accessToken, cart, state, dispatch }}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
