import Header from "../../components/Header";
import Post from "../../components/Post";
import { ContainerHome } from "./styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { ListItem } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import ModalAddPost from "../../components/ModalCreatePost";
import ModalAddComment from "../../components/ModalCreateComment";
import { motion } from "framer-motion";
import ModalEditPost from "../../components/ModalEditPost";
import DropdownPost from "../../components/DropdownPost";

export interface IUserComment {
 userId: number | string;
 name: string;
 url_avatar: string;
 message: string;
 created_at: string;
 updated_at: string;
}

export interface IComments {
 id: number | string;
 user: IUserComment;
}

export interface IPosts {
 id: number | string;
 name: string;
 url_avatar: string;
 message: string;
 created_at: string;
 updated_at: string;
 userId: number;
 like: number;
 comments: IComments[];
}

const Home = () => {
 const { user, setShowAddPost, posts, getPosts, showAddPost, showAddComment, showEditPost, menuEdit, setMenuEdit } =
  useContext(UserContext);

 useEffect(() => {
  const showPosts = () => getPosts();
  showPosts();
 }, []);

 return (
   <>
   <Header />
   <ContainerHome
    as={motion.div}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }} 
   >
    <div className="NovaPublicacao">
     <img src={user?.url_avatar} alt="" />
     <button onClick={() => setShowAddPost(true)}>
      No que você está pensando?
     </button>
    </div>
    {showAddComment && <ModalAddComment />}
    {showAddPost && <ModalAddPost />}
    {showEditPost && <ModalEditPost />}
    <ul>
     {posts?.map((post) => (
      <li key={uuidv4()}>
       <Post post={post} />
       {menuEdit && (<DropdownPost id={post?.id}/>)}
      </li>
     ))}
    </ul>
   </ContainerHome>
  </>
 );
};

export default Home;
