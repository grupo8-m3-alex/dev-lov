import { Toaster } from 'react-hot-toast';
import './App.css'
import Header from './components/Header';
import RoutesMain from './routes';

function App() {


  return (
    <div className="App">
      <Toaster />
      <RoutesMain />
    </div>
  )
}

export default App;
