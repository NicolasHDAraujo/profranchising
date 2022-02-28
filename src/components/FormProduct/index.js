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

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      image,
      ingredients: {
        cost,
        nameIngredient,
        quantity
      },
      nameProduct,
      price
    }
    createProduct(data)
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

  function handleMoreIngredient() {
    return true; //inserir mais campos input 
  }

  return (
    <form className={styles.Card}>
      <h1>Novo Produto</h1>
      <input type="url" placeholder="imagem" value={image} onChange={e => setImage(e.target.value)} />
      <input type="text" placeholder="nome" value={nameProduct} onChange={e => setNameProduct(e.target.value)} />
      <input type="number" placeholder="preço" value={price} onChange={e => setPrice(e.target.value)} />
      <h2>Ingredientes</h2>
      <input type="number" placeholder="custo" value={cost} onChange={e => setCost(e.target.value)} />
      <input type="text" placeholder="nome" value={nameIngredient} onChange={e => setNameIngredient(e.target.value)} />
      <input type="number" placeholder="quantidade" value={quantity} onChange={e => setQuantity(e.target.value)} />
      <button onClick={handleMoreIngredient}>+</button>
      <div>
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={handleCancel}>Cancelar</button>
      </div>
    </form>
  )
}