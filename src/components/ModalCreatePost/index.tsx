import * as yup from 'yup';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { UserContext } from '../../contexts/userContext';
import { GrClose } from 'react-icons/gr';
import { All } from './styled';

interface IAddPostForm {
  text: string;
}

const schema = yup.object().shape({
  text: yup.string().required('A mensagem não pode ser enviada vazia'),
});

const ModalAddPost = () => {
  const { user, setShowAddPost, createPost, posts, getPosts } =
    useContext(UserContext);

  useEffect(() => {
    const showPosts = () => getPosts();
    showPosts();
  }, posts);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAddPostForm>({
    resolver: yupResolver(schema),
  });

  const newPost = (data: any) => {
    const newData = {
      name: user?.name,
      url_avatar: user?.url_avatar,
      message: data?.text,
      created_at: new Date(),
      updated_at: new Date(),
      userId: user?.id,
      like: 0,
      comments: [],
    };
    createPost(newData);
    setShowAddPost(false);
  };

  return (
    <All>
      <div className="AddModal">
        <div className="Head">
          <div>
            <h2>Criar publicação</h2>
            <button onClick={() => setShowAddPost(false)}>
              <GrClose />
            </button>
          </div>
        </div>
        <div className="InfoUser">
          <img src={user?.url_avatar} />
          <h2>{user?.name}</h2>
        </div>
        <form onSubmit={handleSubmit(newPost)}>
          <textarea id="text" {...register('text')} placeholder="Digite aqui" />
          <span>{errors.text?.message}</span>
          <button type="submit" onClick={() => getPosts()}>
            Publicar
          </button>
        </form>
      </div>
    </All>
  );
};

export default ModalAddPost;
