import { motion } from "framer-motion";
import { useContext } from "react";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { UserContext } from "../../contexts/userContext";
import { DropdownEdit } from "./style";

const DropdownPost = ({id, post, deletePostProps}) => {
 const {showEditPost, setShowEditPost, deletePost, setMenuEdit} = useContext(UserContext);

 return (
   <DropdownEdit
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
   >
    <div className="Menu">
     <button id="editPost" onClick={() => {
      setMenuEdit(false)
      setShowEditPost(!showEditPost)}}>
      <FiUser />
      <span>Editar</span>
     </button>
     <button id={id} className="deletePost" onClick={deletePostProps}>
      <MdLogout />
      <span>Deletar</span>
     </button>
    </div>
   </DropdownEdit>
 )
};

export default DropdownPost;