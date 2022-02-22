import { createContext, useState } from "react";

import { api } from '../services/api';

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/auth/login',
        {
          email, 
          password
        }
      )

      console.debug(response.data);

      setAuthenticated(true);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }