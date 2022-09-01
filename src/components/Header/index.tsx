import logo from "../../Assets/logo.png";
import heart from "../../Assets/heart.png";
import { Header_ } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  
  const redirectDevlov = () => {
    toast.success("Entrando em DevLov", {
      duration: 3000,
      id: "toDevLov",
      position: "top-center",
      style: {
        border: "1px solid white"
      },
      icon: "❤️"
    })
    setTimeout( () => {navigate("/devlov", { replace: true })}, 3000);
  }

  return (
  <Header_>
    <div>
      <img src={logo} alt="DevLov_" />
      <div className="Profile">
        <button id="btnDevlov" onClick={() => redirectDevlov()}>
          <img src={heart} alt="S2" />
        </button>
        <button id="btnProfile">
          <img src="" alt="" />
        </button>
      </div>
    </div>
  </Header_>
  )
}

export default Header;
