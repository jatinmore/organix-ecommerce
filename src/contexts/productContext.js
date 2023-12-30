import { createContext, useReducer, useContext } from "react";
import { reducer } from "../reducer/reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const ProductContext = createContext();
const initialState = {
    data: [],
    searchQuery: "",
    categoryData: [],
    productDetail: [],
    filteredData: [],
    sortHighToLow: null,
    rating: 0,
    category: ""
};
export const ProductProvider = ({ children }) => {
    const [{
        data,
        categoryData,
        productDetail,
        filteredData,
        sortHighToLow,
        rating,
        category,
        searchQuery
    }, dispatch] = useReducer(
        reducer,
        initialState
    );
    const navigate = useNavigate();

    const findProduct = (e) => {
        dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
        navigate("/product");
    };

    const getProductById = async(id) => {
        try {
            const res = await axios.get(`/api/products/${id}`);
            dispatch({ type: "GET_PRODUCTDETAIL", payload: res.data.product });
            navigate("/productDetail");
        } catch (error) {
            console.error(error);
        }
    };
    const value = {
        data,
        categoryData,
        productDetail,
        filteredData,
        sortHighToLow,
        rating,
        category,
        getProductById,
        dispatch,
        navigate,
        findProduct,
        searchQuery
    }
    return <ProductContext.Provider value = { value } > {
        children
    } < /ProductContext.Provider>
};

export const useProductContext = () => {
    return useContext(ProductContext);
};