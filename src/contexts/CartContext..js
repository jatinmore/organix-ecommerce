import { useContext } from "react";
import { createContext } from "react";
import { ProductContext } from "./productContext";
import { useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data } = useContext(ProductContext);

  const cart = {
    data,
    total: 0,
    quantity: 0,
    cartItems: [],
  };

  const [state, dispatch] = useReducer(CartReducer, cart);

  return (
    <CartContext.Provider value={{ cart, state, dispatch }}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
