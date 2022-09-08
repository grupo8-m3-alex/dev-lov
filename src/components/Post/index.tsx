import { useState, useContext, useEffect } from 'react';
import { IUser, UserContext } from '../../contexts/userContext';
import { v4 as uuidv4 } from 'uuid';
import { IPosts } from '../../pages/Home';
import ModalEditPost from '../ModalEditPost';
import Comments from '../Comments';
import NoComments from '../NoComments';

import { FaRegComment } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit3 } from 'react-icons/fi';

import { Content } from './styles';
import toast from 'react-hot-toast';
import { api } from '../../services/api';
import { Link } from 'react-router-dom';

interface IPostProps {
  post: IPosts;
}

const Post = ({ post }: IPostProps) => {
  const {
    user,
    setShowAddComment,
    deletePost,
    setShowEditPost,
    showEditPost,
    getPosts,
    setIdEditPost,
    handleLikeClick,
    updateUser,
  } = useContext(UserContext);
  const [showComments, setShowComments] = useState<boolean>(false);
  const [animationLike, setAnimationLike] = useState(false);
  const handleComments = () => {
    setShowComments(!showComments);
  };

  const del = async (event: any) => {
    const toastSingIn = toast.loading('Deletando...');
    const idPost = Number(event.currentTarget.id);

    await deletePost(idPost).then((resp) => {
      toast.success('Publicação deletada com sucesso!', {
        id: toastSingIn,
      });

      api.get<IUser[]>('users').then(({ data }) => {
        data.forEach((userCurrent) => {
          const newLikeList = userCurrent.likeList.filter(
            (like) => like !== idPost
          );
          api
            .patch(`users/${userCurrent.id}`, { likeList: newLikeList })
            .then((resp) => {
              if (resp.data.id === user?.id && user) {
                updateUser(user.id, { likeLike: newLikeList });
              }
            });
        });
      });

      getPosts();
    });
  };

  const changeId = (event: any) => {
    setIdEditPost(+event.currentTarget.id);
  };

  useEffect(() => {
    let timer: any;
    timer = setTimeout(() => {
      setAnimationLike(false);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [animationLike]);

  return (
    <>
      <Content animationLike={animationLike}>
        <div className="HeadPost">
          <div className="InfoUser">
            <img src={post?.url_avatar} alt="Foto" />
            <h2>
              <Link to={`/profile/${post.userId}`}>{post?.name}</Link>
            </h2>
          </div>
          {post?.userId == user?.id && (
            <div className="btns">
              <button
                className="edit"
                id={post.id.toString()}
                onClick={(event) => {
                  changeId(event);
                  setShowEditPost(true);
                }}
              >
                <FiEdit3 />
              </button>
              {showEditPost && <ModalEditPost post={post} />}
              <button className="delete" id={post.id.toString()} onClick={del}>
                <AiTwotoneDelete id={post.id.toString()} />
              </button>
            </div>
          )}
        </div>
        <div className="Text">
          <p>{post?.message}</p>
        </div>
        <div className="Buttons">
          <div className="LeftButtons">
            <button
              id="btnOne"
              onClick={() => {
                setAnimationLike(true);
                handleLikeClick(post.id);
              }}
            >
              {user?.likeList.includes(post.id) ? (
                <BiLike color="blue" />
              ) : (
                <BiLike />
              )}
              <span>Curtir</span>
              <span className="likeCount">{post.like}</span>
            </button>
            <button
              id="btnTwo"
              onClick={() => {
                setIdEditPost(post?.id);
                setShowAddComment(true);
              }}
            >
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
