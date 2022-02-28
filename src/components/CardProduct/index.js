import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"

import styles from './card.module.scss'

export default function CardProduct() {
  const { setPage, allProducts } = useContext(ProductContext);

  const { content } = allProducts;

  console.log(content)

  return (
    <div>
      {content ? (
        <div className={styles.Card}>
          {content.map((product) => (
            <div key={product.id} className={styles.Product}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <span>Preço: {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(product.price)}</span>
            
            <h3>Ingredientes</h3>
              {product.ingredients.map((ingredient) => (
            <div key={ingredient.id} className={styles.Ingredient}>
                <span>Nome: {ingredient.name}</span>
                <span>Custo: {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(ingredient.cost)}</span>
                <span>Quantidade: {ingredient.quantity}</span>
            </div>
              ))}
            </div>
          ))}
        </div>
      ): (
        <h1>Não há produtos cadastrados</h1>
        )}
    </div>
  )

}