import { Toaster } from 'react-hot-toast';
import ModalLoading from './components/ModalLoading';
import { UserContext } from './contexts/userContext';
import RoutesMain from './routes';
import { useContext } from "react";
import "./App.css";
import ButtonChat from "./components/ButtonChat";
import ModalChat from "./components/ModalChat";

function App() {
  const { isLoading, user } = useContext(UserContext);

  if (isLoading) return <ModalLoading />;

  return (
    <div className="App">
      <Toaster />
      <RoutesMain />
      <ModalChat />
      {user && (<ButtonChat />)}
    </div>
  );
}

export default App; 