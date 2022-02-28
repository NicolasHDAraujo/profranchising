import { useContext } from "react";
import { ProductProvider } from "../../context/ProductContext";
import { AuthContext } from "../../context/AuthContext";
import FormProduct from "../../components/FormProduct";
//import CardProduct from "../../components/CardProduct";

import styles from './products.module.scss'

export function Products() {
  const {singOut} = useContext(AuthContext);

  return (
    <ProductProvider>
      <button onClick={singOut}>Logout</button>
      <FormProduct />
    </ProductProvider>
  )
}
