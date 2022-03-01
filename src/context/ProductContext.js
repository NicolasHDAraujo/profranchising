import { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import history from '../routes/history';
import { api } from '../services/api';

const ProductContext = createContext({})

function ProductProvider({ children }) {
  const [allProducts, setAllProducts] = useState({});
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    async function getAllProduct() {
      try {
        const { data } = await api.get(
          `/product/list?page=${page}&size=${size}`)

        return setAllProducts(data)
      } catch (err) {
        console.log(err);
      }
    }

    getAllProduct()
  }, [page, size])

  async function createProduct(dataProduct) {

    const {
      id,
      image,
      ingredients,
      name,
      price
    } = dataProduct;

    console.log(dataProduct)

    try {
      const response = await api.post('/product/save', {
        id,
        image,
        ingredients,
        name,
        price
      })

      console.log(response);
      return history.push('/products')
    } catch (err) {
      console.log(err.message);
    }
  }

  async function deleteProduct(e, id) {
    try {
      e.persist();
      await api.delete(`/product/delete/${id}`)
      e.target.parentElement.parentElement.remove()
      return
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