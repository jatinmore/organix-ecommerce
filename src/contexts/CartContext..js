import { useContext } from "react";
import { createContext } from "react";
import { ProductContext } from "./productContext";
import { useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "./AuthContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cart = {
    total: 0,
    quantity: 0,
    cartItems: [],
  };
  const { accessToken } = useAuth();
  const [state, dispatch] = useReducer(CartReducer, cart);
  const addToCart = async (item, accessToken) => {
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product: item },
        {
          headers: { authorization: accessToken },
        }
      );
      dispatch({ type: "ADD", payload: res.data.cart });
    } catch (error) {
      console.error(error);
    }
  };

  const getCart = async () => {
    try {
      const res = await axios.get("/api/user/cart", {
        headers: { authorization: accessToken },
      });
      console.log(res);
    } catch (error) {}
  };

  const removeCartItem = async (id) => {
    try {
      const res = await axios.delete(`/api/user/cart/${id}`, {
        headers: { authorization: accessToken },
      });
      console.log(res);
      dispatch({ type: "REMOVE", payload: res.data.cart });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <CartContext.Provider
      value={{ cart, state, dispatch, addToCart, getCart, removeCartItem }}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
