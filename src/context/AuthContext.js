import { createContext, useEffect, useState } from "react";

import useAuth from './hooks/useAuth'

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const {loading, signIn, authenticated, singOut} = useAuth();

  return (
    <AuthContext.Provider value={{ loading, signIn, authenticated, singOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }