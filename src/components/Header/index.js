import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import history from '../../routes/history';
import styles from './header.module.scss';

export default function Header() {
  const { singOut } = useContext(AuthContext);

  return (
    <div className={styles.headerContainer}>
      <button onClick={() => history.push('/products')}>
        Inicio
      </button>
      <button onClick={() => history.push('/products/form')}>
        Novo Produto
      </button>
      <button onClick={singOut}>
        Sair
      </button>
    </div>
  )
} 