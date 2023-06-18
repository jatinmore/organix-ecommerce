import { createContext, useEffect, useReducer, useContext } from "react";
import { reducer } from "../reducer/reducer";
import { FetchApi } from "../api/FetchApi";
export const ProductContext = createContext();
const initialState = {
  data: [],
  categoryData: [],
};
export const ProductProvider = ({ children }) => {
  const [{ data, categoryData }, dispatch] = useReducer(reducer, initialState);
  const url = "/api/products";
  const categoryUrl = "/api/categories";

  useEffect(() => {
    FetchApi(url).then((data) => {
      dispatch({ type: "GET_PRODUCTS", payload: data.products });
    });
    FetchApi(categoryUrl).then((data) => {
      dispatch({ type: "GET_CATEGORY", payload: data.categories });
    });
  }, []);
  return (
    <ProductContext.Provider value={{ data, categoryData }}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
