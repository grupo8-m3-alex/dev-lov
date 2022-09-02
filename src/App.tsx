import { useContext } from "react";
import "./App.css";
import ModalLoading from "./components/ModalLoading";
import { UserContext } from "./contexts/userContext";
import RoutesMain from "./routes";

function App() {
  const { isLoading } = useContext(UserContext);

  if (isLoading) return <ModalLoading />;

  return (
    <div className="App">
      <RoutesMain />
    </div>
  );
}

export default App;
