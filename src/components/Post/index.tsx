import { Content } from "./styles";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { RiEyeCloseLine } from "react-icons/ri";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import Comments from "../Comments";
import { v4 as uuidv4 } from "uuid";
import NoComments from "../NoComments";
import { UserContext } from "../../contexts/userContext";
import {AiTwotoneDelete} from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";
import ModalEditPost from "../ModalEditPost";
import { IPosts } from "../../pages/Home";

const Post = ({post}:IPosts) => {
 const { user, setShowAddComment, deletePost, setShowEditPost, showEditPost, getPosts, setIdEditPost } = useContext(UserContext);
 const [showComments, setShowComments] = useState<boolean>(false);
 const [like, setLike] = useState<boolean>(false);
 const handleComments = () => {
  setShowComments(!showComments);
 };

 const handleLike = () => {
  setLike(!like);
 };

 const del = async (event: any) => {
  await deletePost(`${event.currentTarget.id}`)
  getPosts()
 };

 const changeId = (event: any) => {
  setIdEditPost(+event.currentTarget.id)
 }

 return (
  <>
   <Content>
    <div className="HeadPost">
     <div className="InfoUser">
      <img src={post?.url_avatar} alt="Foto" />
      <h2>{post?.name}</h2>
     </div>
     {post?.userId == user?.id && (<div className="btns">
     <button className="edit" id={post?.id} onClick={(event) => {
      changeId(event)
      setShowEditPost(true)}}>
      <FiEdit3 />
      <span>Editar</span>
     </button>
      {showEditPost && (<ModalEditPost post={post}/>)}
     <button className="delete" id={post?.id} onClick={del}> 
      <AiTwotoneDelete id={post?.id} />
      <span>Deletar</span>
     </button>
     </div>)}
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
      <button id="btnTwo" onClick={() => {
       setIdEditPost(post?.id)
       setShowAddComment(true)}}>
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
