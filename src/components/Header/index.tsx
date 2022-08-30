import logo from "../../Assets/Group 29.png";
import heart from "../../Assets/Group 19.png";
import { Header_ } from "./styled";

const Header = () => (
 <Header_>
  <img src={logo} alt="DevLov_"/>
  <div className="Profile">
   <button id="btnDevlov">
    <img src={heart} alt="S2"/>
   </button>
   <button id="btnProfile">
    <img src={heart} alt=""/>
    </button>
  </div>
 </Header_>
)

export default Header;