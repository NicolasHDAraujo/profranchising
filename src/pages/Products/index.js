import { ProductProvider } from "../../context/ProductContext";
import { CardProduct } from "../../components/CardProduct";

import styles from './products.module.scss'
import Header from "../../components/Header";

export function Products() {

  return (
    <>
      <Header />
      <ProductProvider>
        <CardProduct />
      </ProductProvider>
    </>
  )
}
