import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useParams } from 'react-router-dom';

import Post from '../Post';

const Posts = () => {
  const { user, posts } = useContext(UserContext);

  const { user_id } = useParams();

  const userId = user_id || user?.id;

  const filteredPost = posts.filter((post) => post.userId === Number(userId));

  return (
    <>
      {filteredPost.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default Posts;
