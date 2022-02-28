import { useContext } from "react"
import { ProductContext } from "../../context/ProductContext"

import styles from './card.module.scss'

export default function CardProduct() {
  const { setPage, allProducts, deleteProduct } = useContext(ProductContext);

  const { content } = allProducts;

  function handleDelete(e, id) {
    deleteProduct(id)
  }
  
  function handleEdit(e, id) {
    console.log(id);
  }

  return (
    <div>
      {content && (
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
              <div className={styles.DivButton}>
                <button 
                  type="submit"
                  className={styles.Delete} 
                  onClick={(e) => handleDelete(e, product.id) }
                  >excluir</button>
                <button 
                  className={styles.Edit}
                  onClick={(e) => handleEdit(e, product.id)}
                  >editar</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )

}