import { Content } from "./styles";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { color } from "@mui/system";
import { useState, useContext, useEffect } from "react";
import Comments from "../Comments";
import { v4 as uuidv4 } from "uuid";
import NoComments from "../NoComments";
import { UserContext } from "../../contexts/userContext";
import ModalAddComment from "../ModalCreateComment";
import { motion } from "framer-motion";

const Post = ({ post }) => {
 const { showAddComment, setShowAddComment, menuEdit, setMenuEdit } = useContext(UserContext);
 const [showComments, setShowComments] = useState<boolean>(false);
 const [like, setLike] = useState<boolean>(false);

 const handleComments = () => {
  setShowComments(!showComments);
 };

 const handleLike = () => {
  setLike(!like);
 };

 return (
  <>
   <Content>
    <div className="HeadPost">
     <div className="InfoUser">
      <img src={post?.url_avatar} alt="" />
      <h2>{post?.name}</h2>
     </div>
     <button onClick={() => setMenuEdit(!menuEdit)}>
      <HiDotsHorizontal />
     </button>
    </div>
    <div className="Text">
     <p>{post?.message}</p>
    </div>
    <div className="Buttons">
     <div className="LeftButtons">
      <button id="btnOne" onClick={() => handleLike()}>
       {like === false ? <BiLike /> : <BiLike color="blue" />}
       <span>Curtir</span>
      </button>
      <button id="btnTwo" onClick={() => setShowAddComment(true)}>
       <FaRegComment />
       <span>Comentar</span>
      </button>
      <button id="btnThree" onClick={() => handleComments()}>
       {showComments === false ? (
        <>
         <MdOutlineRemoveRedEye />
         <span>Ver comentários</span>
        </>
       ) : (
        <>
         <RiEyeCloseLine />
         <span>Esconder comentários</span>
        </>
       )}
      </button>
     </div>
    </div>
   </Content>
   <ul>
    {showComments &&
     post?.comments.map((value) => (
      <li key={uuidv4()}>
       <Comments value={value} post={post} />
      </li>
     ))}
    {showComments && post?.comments.length == 0 && (
     <li>
      <NoComments />
     </li>
    )}
   </ul>
  </>
 );
};

export default Post;
