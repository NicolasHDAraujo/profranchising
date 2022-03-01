import { ProductProvider } from "../../context/ProductContext";

import styles from './products.module.scss'

import Header from "../../components/Header";
import FormProduct from "../../components/FormProduct";

export function Form() {

  return (
    <>
      <Header />
      <ProductProvider>
        <FormProduct />
      </ProductProvider>
    </>
  )
}
