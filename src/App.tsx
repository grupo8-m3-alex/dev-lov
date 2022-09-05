import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import ModalLoading from './components/ModalLoading';
import { UserContext } from './contexts/userContext';
import RoutesMain from './routes';
import './App.css'

function App() {
  const { isLoading } = useContext(UserContext);

  if(isLoading) return <ModalLoading />

  return (
    <div className="App">
      <Toaster />
      <RoutesMain />
    </div>
  )
}

export default App; 