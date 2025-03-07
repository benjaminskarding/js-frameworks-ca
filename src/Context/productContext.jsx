import React, { createContext, useState, useEffect } from "react";
import { fetchAllProducts } from "../API/fetch";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchAllProducts(); // returns array of products
      setAllProducts(data);
    }
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ allProducts }}>
      {children}
    </ProductContext.Provider>
  );
}
