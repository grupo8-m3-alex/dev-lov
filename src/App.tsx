import { useContext } from 'react';
import './App.css'
import { UserContext } from './contexts/userContext';
import RoutesMain from './routes';

function App() {
  const { isLoading } = useContext(UserContext);

  if(isLoading) return <h1>Carregando</h1>

  return (
    <div className="App">
      <RoutesMain />
    </div>
  )
}

export default App;
