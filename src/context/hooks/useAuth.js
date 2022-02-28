import {useState, useEffect} from 'react'

import { api } from '../../services/api';
import history from '../../routes/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, [])

  async function signIn({ username, password }) {
    try {
      const response = await api.post('/auth/login',
        {
          username,
          password
        }
      )
      //      console.log(response.headers.authorization);
      const token = response.headers.authorization
      const split = token.split(' ', 2)
      
      const tokenSplit = split[1];

      localStorage.setItem('token', JSON.stringify(tokenSplit));
      api.defaults.headers.authorization = `Bearer ${tokenSplit}`;
      
      setAuthenticated(true);
      
      history.push('/products')

    } catch (err) {
      console.log(err);
    }
  }

  function singOut() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.authorization = undefined;
    
    
    history.push('/')
  }

  return {loading, signIn, authenticated, singOut}
}