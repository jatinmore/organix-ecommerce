import { useReducer, useContext } from "react";
import { createContext } from "react";
import { WishListReducer } from "../reducer/WishListReducer";
import { useAuth } from "./AuthContext";
import axios from "axios";

export const WishListContext = createContext();
export const WishListProvider = ({ children }) => {
  const { accessToken } = useAuth();
  const initialState = {
    wishList: [],
  };
  const [{ wishList }, dispatch] = useReducer(WishListReducer, initialState);

  const addToWishList = async (item, accessToken) => {
    try {
      const res = await axios.post(
        "/api/user/wishlist",
        {
          product: item,
        },
        {
          headers: { authorization: accessToken },
        }
      );
      dispatch({ type: "ADD_TO_WISHLIST", payload: res.data.wishlist });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  const removeFromWishList = async (id) => {
    try {
      const res = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: accessToken },
      });
      dispatch({ type: "REMOVE_FROM_WISHLIST", payload: res.data.wishlist });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <WishListContext.Provider
      value={{ addToWishList, wishList, removeFromWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

export const useWishList = () => {
  return useContext(WishListContext);
};
