import { Content } from './styles';
import { HiDotsHorizontal } from 'react-icons/hi';
import { FaRegComment } from 'react-icons/fa';
import { BiLike } from 'react-icons/bi';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { useState, useContext } from 'react';
import Comments from '../Comments';
import { v4 as uuidv4 } from 'uuid';
import NoComments from '../NoComments';
import { UserContext } from '../../contexts/userContext';
import { IPosts } from '../../pages/Home';

interface IPostProps {
  post: IPosts;
}

const Post = ({ post }: IPostProps) => {
  const {
    setShowAddComment,
    menuEdit,
    setMenuEdit,
    handleLikeClick,
    user,
    setIdPost,
  } = useContext(UserContext);
  const [showComments, setShowComments] = useState<boolean>(false);

  const handleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <Content>
        <div className="HeadPost">
          <div className="InfoUser">
            <img src={post?.url_avatar} alt="" />
            <h2>{post?.name}</h2>
          </div>
          {post.userId === user?.id && (
            <button onClick={() => setMenuEdit(!menuEdit)}>
              <HiDotsHorizontal />
            </button>
          )}
        </div>
        <div className="Text">
          <p>{post?.message}</p>
        </div>
        <div className="Buttons">
          <div className="LeftButtons">
            <button id="btnOne" onClick={() => handleLikeClick(post.id)}>
              {user?.likeList.includes(post.id) ? (
                <BiLike color="blue" />
              ) : (
                <BiLike />
              )}
              <span>Curtir</span>
            </button>
            <button
              id="btnTwo"
              onClick={() => {
                setIdPost(post.id);
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
