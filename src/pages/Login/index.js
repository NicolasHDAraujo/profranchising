import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import styles from "./login.module.scss";

export function Login() {
  const { authenticated, signIn } = useContext(AuthContext)

  console.log(authenticated)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      email,
      password,
    }

    signIn(data);
  }

  return (
    <div className={styles.Div}>
      <form onSubmit={handleSubmit}>
        <h1>Bem vindo!</h1>
        <input type="text" placeholder="Usuário" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>

  )
}