import { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { ProductContext } from '../../context/ProductContext';
import history from '../../routes/history';

import styles from './formProduct.module.scss';

export default function FormProduct() {
  const { createProduct } = useContext(ProductContext);

  const [image, setImage] = useState('')
  const [nameProduct, setNameProduct] = useState('')
  const [price, setPrice] = useState('')
  const [cost, setCost] = useState('')
  const [nameIngredient, setNameIngredient] = useState('')
  const [quantity, setQuantity] = useState('')

  function handleCreateProduct(event) {
    event.preventDefault();
    
    const ingredients = [{
      cost,
      id: 0,
      name: nameIngredient,
      quantity,
    }]

    const dataProduct = {
      id: 0,
      image,
      ingredients,
      name: nameProduct,
      price,
    }

    createProduct(dataProduct)
  }

  function handleCancel(event) {
    event.preventDefault()

    setImage('');
    setNameProduct('')
    setPrice('')
    setCost('')
    setNameIngredient('')
    setQuantity('')
    return history.push('/products') 
  }

  return (
    <form className={styles.Card}>
      <h1>Novo Produto</h1>
      <input
        type="text"
        placeholder="Nome do produto"
        value={nameProduct}
        onChange={e => setNameProduct(e.target.value)}
      />
      <input
        type="url"
        placeholder="Url da imagem do produto"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <input
        type="number"
        placeholder="Preço do produto"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <h2>Ingredientes</h2>
      <input
        type="text"
        placeholder="Nome do ingrediente"
        id="nameIngredient"
        value={nameIngredient}
        onChange={e => setNameIngredient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Custo do ingrediente"
        id="cost"
        value={cost}
        onChange={e => setCost(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantidade do ingrediente"
        id="quantity"
        value={quantity}
        onChange={e => setQuantity(e.target.value)}
      />
      <button>+</button>
      <div className={styles.DivButton}>
        <button onClick={e => handleCreateProduct(e)}>Salvar</button>
        <button onClick={e => handleCancel(e)}>Cancelar</button>
      </div>
    </form >
  )
}