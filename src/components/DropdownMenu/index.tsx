import { motion } from "framer-motion";
import { FaUserFriends } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "./style";
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react"

const DropdownMenu = ({ logout }: any) => {
 const navigate = useNavigate();
 const {setMenu} = useContext(UserContext)

 return (
   <Dropdown
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
   >
    <div className="Menu" onMouseLeave={() => setMenu(false)}>
     <button id="editProfile" onClick={() => navigate("/profile")}>
      <FiUser />
      <span>Perfil</span>
     </button>
     <button id="conections" onClick={() => navigate("AVISO: COLOCAR O MODAL CONEXÕES AQUI")}>
      <FaUserFriends />
      <span>Conexões</span>
     </button>
     <button id="logout" onClick={() => logout()}>
      <MdLogout />
      <span>Sair</span>
     </button>
    </div>
   </Dropdown>
 )
};

export default DropdownMenu;