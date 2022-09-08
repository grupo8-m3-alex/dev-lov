import { useContext } from "react";
import "./App.css";
import ButtonChat from "./components/ButtonChat";
import ModalChat from "./components/ModalChat";
import ModalLoading from "./components/ModalLoading";
import { UserContext } from "./contexts/userContext";
import RoutesMain from "./routes";

function App() {
  const { isLoading, user } = useContext(UserContext);

  if (isLoading) return <ModalLoading />;

  return (
    <div className="App">
      <RoutesMain />
      <ModalChat />
      {user && (<ButtonChat />)}
    </div>
  );
}

export default App;
