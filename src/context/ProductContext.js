import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import history from '../routes/history';

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    async function getAllProduct() {
      try {
        const {data} = await api.get(
          `/product/list?page=${page}&size=${size}`)
  
        return setAllProducts(data)
      } catch (err) {
        console.log(err);
      }
    }

    getAllProduct()
  }, [page, size])
  
  async function createProduct(data) {
    try {
      const response = await api.post('/product/save', {
        ...data
      })
      
      console.log(response)
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteProduct(id) {
    try {
      await api.delete(`/product/delete/${id}`)
      history.push(`/products`)
      return;
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ProductContext.Provider value={{ createProduct, allProducts, setPage, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export { ProductContext, ProductProvider }