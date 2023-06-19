import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from "../reducer/reducer";
import { FetchApi } from "../api/FetchApi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const ProductContext = createContext();
const initialState = {
  data: [],
  categoryData: [],
  productDetail: [],
};
export const ProductProvider = ({ children }) => {
  const [{ data, categoryData, productDetail }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const navigate = useNavigate();
  const url = "/api/products";
  const categoryUrl = "/api/categories";
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState(false);
  const findProduct = (e) => {
    setSearchInput(e.target.value);
    setSearch(true);
    navigate("/product");
  };
  const filteredSearch = data.filter(({ name }) =>
    name.toLowerCase().startsWith(searchInput.toLowerCase())
  );

  const getProductById = async (id) => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      dispatch({ type: "GET_PRODUCTDETAIL", payload: res.data.product });
      navigate("/productDetail");
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    FetchApi(url).then((data) => {
      dispatch({ type: "GET_PRODUCTS", payload: data.products });
    });
    FetchApi(categoryUrl).then((data) => {
      dispatch({ type: "GET_CATEGORY", payload: data.categories });
    });
  }, []);
  return (
    <ProductContext.Provider
      value={{
        data,
        categoryData,
        getProductById,
        productDetail,
        findProduct,
        search,
        filteredSearch,
        searchInput,
        setSearch,
      }}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
