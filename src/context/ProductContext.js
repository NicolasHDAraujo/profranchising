import { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
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

  async function createProduct(data) {
    const {
      image,
      id,
      ingredients: [{
        cost,
        nameIngredient,
        quantity
      }],
      nameProduct,
      price
    } = data

    try {
      const response = await api.post('/product/save', {
        image,
        id,
        ingredients: [{
          cost,
          id,
          nameIngredient,
          quantity
        }],
        nameProduct,
        price
      })

      console.log(data)
    } catch (err) {
      console.log(err);
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