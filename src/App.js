import { Router } from 'react-router-dom';
import history from './routes/history';
import Routing from './routes/routing';

import { AuthProvider } from './context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <Routing />
      </Router>
    </AuthProvider>
  );
}
