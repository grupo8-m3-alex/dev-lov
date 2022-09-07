import logo from "../../Assets/logo.png";
import heart from "../../Assets/heart.png";
import { Header_ } from "./styled";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import DropdownMenu from "../DropdownMenu";

const Header = () => {
 const navigate = useNavigate();
 const { user, menu, setMenu } = useContext(UserContext);
 const redirectDevlov = () => {
  toast.success("Entrando em DevLov", {
   duration: 3000,
   id: "toDevLov",
   position: "top-center",
   style: {
    border: "1px solid white",
   },
   icon: "❤️",
  });
  setTimeout(() => {
   navigate("/devlov", { replace: true });
  }, 3000);
 };

 const logout = () => {
  localStorage.clear();
  toast("Sua sessão foi encerrada", {
   duration: 3000,
   icon: "⚠️",
  });
  setTimeout(() => navigate("/"), 3000);
 };

 const showMenu = () => {
  setMenu(!menu);
 };

 return (
  <Header_
   as={motion.div}
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.5 }}
  >
   <div className="HeadAux">
    <img src={logo} alt="DevLov_" />
    <div className="Profile">
     <button id="btnDevlov" onClick={() => redirectDevlov()}>
      <img src={heart} alt="S2" />
     </button>
     <button id="btnProfile" onClick={() => showMenu()}>
      <img src={user?.url_avatar} alt="Foto Usuário" />
     </button>
    </div>
   </div>
   {menu && <DropdownMenu logout={logout} />}
  </Header_>
 );
}

export default Header;