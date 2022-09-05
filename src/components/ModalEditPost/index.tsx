import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/userContext";
import { All } from "./styled";
import { GrClose } from "react-icons/gr"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({text: yup.string().required("A mensagem não pode ser enviada vazia")})

const ModalEditPost = (data) => {
  const { getPosts, user, updatePost, setShowEditPost} = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const editPost = (value) => {
    const newData = {
      message: value.text,
      created_at: data?.created_at,
      updated_at: new Date()
    } 
    updatePost(data?.id, newData)
  }

  return (
      <All>
      <div className="EditModal">
        <div className="Head">
          <div>
            <h2>Editar publicação</h2>
            <button onClick={() => setShowEditPost(false)}>
              <GrClose/>
            </button>
          </div>
        </div>
        <div className="InfoUser">
          <img src={user?.url_avatar}/>
          <h2>{user?.name}</h2>
        </div>
        <form onSubmit={handleSubmit(editPost)}>
          <textarea id="text" {...register("text")} placeholder="Digite aqui" />
          <span>{errors.text?.message}</span>
          <button type="submit" onClick={() => {
            setShowEditPost(false)
            getPosts()}}>Publicar</button>
        </form>
      </div>
    </All>
  );
};

export default ModalEditPost;
