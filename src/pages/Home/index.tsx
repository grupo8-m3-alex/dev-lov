import { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import Header from '../../components/Header';
import Post from '../../components/Post';
import ModalAddComment from '../../components/ModalAddComment';
import ModalAddPost from '../../components/ModalCreatePost';
import { UserContext } from '../../contexts/userContext';

import { ContainerHome } from './styles';

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
  id: number;
  name: string;
  url_avatar: string;
  message: string;
  created_at: string;
  updated_at: string;
  userId: number;
  like: number;
  comments: IComments[];
  age: number;
}

const Home = () => {
  const {
    user,
    setShowAddPost,
    posts,
    getPosts,
    showAddPost,
    showAddComment,
    menuEdit,
    setMenuEdit,
  } = useContext(UserContext);

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
        <ul>
          {posts?.map((post) => (
            <li key={uuidv4()}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </ContainerHome>
    </>
  );
};

export default Home;
