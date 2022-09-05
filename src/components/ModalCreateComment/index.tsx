import { defaultListboxReducer } from "@mui/base";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { All } from "./style";
import { GrClose } from "react-icons/gr"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {v4 as uuidv4} from "uuid"

export interface IComment {
  id: string;
  user: {
    userId: number | undefined;
    name: string | undefined;
    url_avatar: string | undefined;
    message: any;
    created_at: Date;
    updated_at: Date;
  }
} 

const schema = yup.object().shape({text: yup.string().required("A mensagem não pode ser enviada vazia")})

const ModalAddComment = () => { 
  const { user, setShowAddComment, createComment, posts, getPosts } = useContext(UserContext);
  const [allComments, setAllComments] = useState({})
  useEffect(() => {
    const showPosts = () => getPosts()
    showPosts();

    setAllComments(posts?.comments)
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const newComment = (data:any) => {
    const comments = { comments: [...allComments,
      {
      id: uuidv4(),
      user: {
        userId: user?.id,
        name: user?.name,
        url_avatar: user?.url_avatar,
        message: data.text,
        created_at: new Date(),
        updated_at: new Date()
      }
    }]

    
  }
    // createComment(1, comments)
    console.log(posts)
  }

  return (
    <All >
      <div className="AddModal">
        <div className="Head">
          <div>
            <h2>Criar comentário</h2>
            <button onClick={() => setShowAddComment(false)}><GrClose/></button>
          </div>
        </div>
        <div className="InfoUser">
          <img src={user?.url_avatar}/>
          <h2>{user?.name}</h2>
        </div>
        <form onSubmit={handleSubmit(newComment)}>
          <textarea id="text" {...register("text")} placeholder="Digite aqui" />
          {errors && (<span>{errors.text?.message}</span>)}
          <button type="submit">Publicar</button>
        </form>
      </div>
    </All>
  )
};

export default ModalAddComment;