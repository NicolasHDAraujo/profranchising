import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import styles from "./login.module.scss";

export function Login() {
  const { signIn } = useContext(AuthContext)

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username,
      password,
    }

    signIn(data);
  }

  return (
    <div className={styles.Div}>
      <form onSubmit={handleSubmit} className={styles.Form}>
        <h1>Bem vindo!</h1>
        <input type="email" placeholder="Email" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>

  )
}