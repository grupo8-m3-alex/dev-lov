import logo from "../../Assets/logo.png";
import heart from "../../Assets/heart.png";
import { Header_ } from "./styled";

const Header = () => (
  <Header_>
    <div>
      <img src={logo} alt="DevLov_" />
      <div className="Profile">
        <button id="btnDevlov">
          <img src={heart} alt="S2" />
        </button>
        <button id="btnProfile">
          <img src="" alt="" />
        </button>
      </div>
    </div>
  </Header_>
);

export default Header;
