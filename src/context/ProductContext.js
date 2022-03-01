import { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../routes/history';
import { api } from '../services/api';
import useProduct from './hooks/useProduct';

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const { createProduct, allProducts, setPage, deleteProduct } = useProduct()

  return (
    <ProductContext.Provider value={{ createProduct, allProducts, setPage, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }