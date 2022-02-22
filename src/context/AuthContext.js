import { createContext, useState } from "react";

import { api } from '../services/api';

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn({email, password}) {
    const data = {
      email,
      password
    }

    const {data: { authorization }} = await api.post('/auth/login', data);

    console.debug(authorization)

    setAuthenticated(true);
  }

  return(
    <AuthContext.Provider value={{signIn, authenticated}}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext , AuthProvider}