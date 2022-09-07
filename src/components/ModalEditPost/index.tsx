import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { All } from './styled';
import { GrClose } from 'react-icons/gr';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IPosts } from '../../pages/Home';

const schema = yup.object().shape({
  text: yup.string().required('A mensagem não pode ser enviada vazia'),
});

interface IEditPostForm {
  text: string;
}
interface IModalEditPostProps {
  post: IPosts;
}

const ModalEditPost = ({ post }: IModalEditPostProps) => {
  const { getPosts, user, updatePost, setShowEditPost, idEditPost } =
    useContext(UserContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IEditPostForm>({
    resolver: yupResolver(schema),
  });

  const editData = async (data: IEditPostForm) => {
    const newData = {
      message: data?.text,
      created_at: post?.created_at,
      updated_at: new Date(),
    };
    await updatePost(idEditPost, newData);
    getPosts();
    setShowEditPost(false);
  };

  return (
    <All>
      <div className="EditModal">
        <div className="Head">
          <div>
            <h2>Editar publicação</h2>
            <button onClick={() => setShowEditPost(false)}>
              <GrClose />
            </button>
          </div>
        </div>
        <div className="UserPost">
          <img src={user?.url_avatar} />
          <h2>{user?.name}</h2>
        </div>
        <form onSubmit={handleSubmit(editData)}>
          <textarea {...register('text')} placeholder="Digite aqui" />
          <span>{errors?.text?.message}</span>
          <button type="submit">Editar</button>
        </form>
      </div>
    </All>
  );
};

export default ModalEditPost;