import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  return <ProductContext.Provider> {children} </ProductContext.Provider>;
};
