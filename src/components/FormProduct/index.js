import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ProductContext } from '../../context/ProductContext';

import styles from './formProduct.module.scss';

export default function FormProduct() {
  const { createProduct } = useContext(ProductContext);

  const [image, setImage] = useState('')
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState(0)
  const [cost, setCost] = useState('')
  const [nameIngredient, setNameIngredient] = useState('')
  const [quantity, setQuantity] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [products, setProducts] = useState({})

  let moreIngredients = 1;

  function handleSubmit(event) {
    event.preventDefault();

    setProducts({
      image,
      nameProduct,
      id: 0,
      price
    })

    setIngredients([{
      cost,
      nameIngredient,
      quantity
    }])

    createProduct(products, ingredients)
  }

  function handleCancel() {
    setImage('');
    setNameProduct('')
    setPrice(0)
    setCost('')
    setNameIngredient('')
    setQuantity('')
    return <Redirect to="/products" />
  }

  function handleMoreIngredient(event) {
    event.preventDefault();

    setIngredients([...ingredients, ""])
    return true;
  }

  return (
    <form className={styles.Card}>
      <h1>Novo Produto</h1>
      <input type="text" placeholder="Nome do produto" value={nameProduct} onChange={e => setNameProduct(e.target.value)} />
      <input type="url" placeholder="Url da imagem do produto" value={image} onChange={e => setImage(e.target.value)} />
      <input type="number" placeholder="Preço do produto" value={price} onChange={e => setPrice(e.target.value)} />
      <h2>Ingredientes</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index} className={styles.MoreIngredientForm}>
          <input
            type="text"
            placeholder="Nome do ingrediente"
            value={nameIngredient}
            onChange={e => setNameIngredient(e.target.value)} />
          <input
            type="number"
            placeholder="Custo do ingrediente"
            value={cost}
            onChange={e => setCost(e.target.value)} />
          <input
            type="number"
            placeholder="Quantidade do ingrediente"
            value={quantity}
            onChange={e => setQuantity(e.target.value)} />
        </div>
      ))}
      <button onClick={handleMoreIngredient}>+</button>
      <div className={styles.DivButton}>
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  )
}