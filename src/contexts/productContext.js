import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setData(data.products);
    } catch (error) {
      console.error(error);
    }
  };

  const [categoryData, setCategoryData] = useState([]);
  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategoryData(data.categories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  return (
    <ProductContext.Provider value={{ data, categoryData }}>
      {" "}
      {children}{" "}
    </ProductContext.Provider>
  );
};
