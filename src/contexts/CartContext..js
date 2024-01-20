import { createContext } from "react";
import { useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";
import axios from "axios";
import { useAuth } from "./AuthContext";
import { useState } from "react";
import { toast } from "react-toastify";


export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [btn, setBtn] = useState(false);
    const cart = {
        cartItems: []
    };
    const { accessToken } = useAuth();
    const [{ cartItems }, dispatch] = useReducer(CartReducer, cart);
    const total = cartItems.reduce((acc, curr) => acc += curr.qty * curr.price, 0);

    const addToCart = async(item, accessToken) => {
        try {
            const res = await axios.post(
                "/api/user/cart", { product: item }, {
                    headers: { authorization: accessToken },
                }
            );
            dispatch({ type: "ADD", payload: res.data.cart });
            setBtn(true);
            toast.success("Added to Cart");
        } catch (error) {
            console.error(error);
        }
    };

    const getCart = async() => {
        try {
            const res = await axios.get("/api/user/cart", {
                headers: { authorization: accessToken },
            });
            console.log(res);
        } catch (error) {}
    };

    const removeCartItem = async(id) => {
        try {
            const res = await axios.delete(`/api/user/cart/${id}`, {
                headers: { authorization: accessToken },
            });
            console.log(res);
            dispatch({ type: "REMOVE", payload: res.data.cart });
            toast.success("Item Removed From Cart");
        } catch (error) {
            console.error(error);
        }
    };

    const incQty = async(id) => {
        try {
            const res = await axios.post(
                `/api/user/cart/${id}`, {
                    action: {
                        type: "increment",
                    },
                }, {
                    headers: { authorization: accessToken },
                }
            );
            dispatch({ type: "INC_QTY", payload: res.data.cart });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };
    const decQty = async(id) => {
        try {
            const res = await axios.post(
                `/api/user/cart/${id}`, {
                    action: {
                        type: "decrement",
                    },
                }, {
                    headers: { authorization: accessToken },
                }
            );
            dispatch({ type: "DEC_QTY", payload: res.data.cart });
        } catch (error) {
            console.error(error);
        }
    };
    const values = {
        cart,
        cartItems,
        dispatch,
        addToCart,
        getCart,
        removeCartItem,
        incQty,
        decQty,
        btn,
        setBtn,
        total
    }
    return <CartContext.Provider value = { values } > { children } < /CartContext.Provider>;
};