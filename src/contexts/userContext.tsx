import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import toast from 'react-hot-toast';
import { Location, useLocation, useNavigate } from 'react-router-dom';
import { FormDataDefault } from '../components/Input';
import { IPosts } from '../pages/Home';
import { FormData } from '../pages/Login';
import { api } from '../services/api';
import { ChatContext } from './chatContext';

interface IUserProvider {
  children: ReactNode;
}

interface ILocationState extends Location {
  state: {
    from: string | null;
  };
}

export interface IUser {
  id: number;
  email: string;
  name: string;
  url_avatar: string;
  gender: string;
  city: string;
  state: string;
  age: number;
  bio: string;
  friendsList: any[];
  unFriendsList?: any;
  likeList: number[];
}

interface IComments {
  id: number;
  user: {
    userId: 1;
    name: string;
    url_avatar: string;
    message: string;
    created_at: string;
    updated_at: string;
  };
}

export interface IPost {
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

interface IUserContext {
  user?: IUser | null;
  singIn: (dataForm: FormData) => Promise<any>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getPosts: () => Promise<void>;
  updatePost: (id: number, data: any) => Promise<void>;
  getUser: (id: number) => Promise<IUser>;
  deletePost: (id: number) => Promise<void>;
  updateUser: (id: number, data: any) => Promise<void>;
  isLoading: boolean;
  createPost: (data: any) => Promise<void>;
  registerUser: (data: FormDataDefault) => Promise<any>;
  setUser: Dispatch<SetStateAction<IUser | null>>;
  userIsValid: any;
  logOut: () => void;
  handleLikeClick: (id: number) => void;
  showAddPost: boolean;
  setShowAddPost: Dispatch<SetStateAction<boolean>>;
  createComment: (id: string, data: any) => Promise<void>;
  posts: IPosts[];
  setPosts: Dispatch<SetStateAction<IPosts[]>>;
  showAddComment: boolean;
  setShowAddComment: Dispatch<SetStateAction<boolean>>;
  showEditPost: boolean;
  setShowEditPost: Dispatch<SetStateAction<boolean>>;
  menuEdit: boolean;
  setMenuEdit: Dispatch<SetStateAction<boolean>>;
  setIdPost: Dispatch<SetStateAction<number>>;
  idPost: number;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null as IUser | null);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const [idPost, setIdPost] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [menuEdit, setMenuEdit] = useState<boolean>(false);
  const [showAddPost, setShowAddPost] = useState<boolean>(false);
  const [showEditPost, setShowEditPost] = useState<boolean>(false);
  const [showAddComment, setShowAddComment] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation() as ILocationState;

  const { sendUserID } = useContext(ChatContext);

  useEffect(() => {
    const token = localStorage.getItem('@token_devlov');
    const user = localStorage.getItem('@user_devlov');

    if (token !== null && user !== null) {
      userIsValid(token, JSON.parse(user));
    }
    getPosts();
  }, []);

  const registerUser = async (data: FormDataDefault) => {
    data.friendsList = [];
    data.unFriendsList = [];
    const toastRegister = toast.loading('Verificando dados...');
    return await api
      .post('/register', data)
      .then((res) => {
        toast.success('Usuario registrado com sucesso', {
          id: toastRegister,
        });
        navigate('/', { replace: true });
      })
      .catch((err) => {
        toast.error('Dados invalidos');
        console.error(err);
      });
  };

  const userIsValid = async (token: string, user: IUser) => {
    setIsLoading(true);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    return await api
      .get(`users/${user.id}`)
      .then((resp) => {
        setUser(resp.data);
        sendUserID(resp.data.id, resp.data.name);
        const from =
          location.state?.from || location.pathname === '/'
            ? 'home'
            : location.pathname;
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  const singIn = async (dataForm: FormData) => {
    const toastSingIn = toast.loading('Autenticando...');
    return await api
      .post('login', dataForm)
      .then(({ data: { accessToken, user } }) => {
        toast.success('Autenticado', {
          id: toastSingIn,
        });

        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem('@token_devlov', accessToken);
        localStorage.setItem('@user_devlov', JSON.stringify(user));
        setUser(user);
        const from = location.state?.from || 'home';
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error('Ops! Email ou Senha invalidos.', {
          id: toastSingIn,
        });
      });
  };

  const getPosts = async () => {
    return await api
      .get('posts')
      .then(({ data }) => setPosts(data))
      .catch((err) => console.error(err));
  };

  const updatePost = async (idPost: number, data: any) => {
    return await api
      .patch(`posts/${idPost}`, data)
      .then((res) => getPosts())
      .catch((err) => console.error(err));
  };

  const deletePost = async (id: number) => {
    return await api
      .delete(`posts/${id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  const createPost = async (data: any) => {
    return await api
      .post('posts', data)
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const getUser = async (id: number) => {
    return await api
      .get(`users/${id}`)
      .then(({ data }) => data)
      .catch((err) => console.log(err));
  };

  const updateUser = async (id: number, data: any) => {
    return await api
      .patch(`users/${id}`, data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  };

  const logOut = () => {
    setUser(null);
    localStorage.clear();
    navigate('/', { replace: true });
  };

  const handleLikeClick = (idPost: number) => {
    if (user) {
      let data: any;
      const findPost = posts.filter((post) => post.id === idPost);

      if (user.likeList.includes(idPost)) {
        const newLikeList = user.likeList.filter((postId) => postId !== idPost);

        data = { likeList: [...newLikeList] };

        updatePost(idPost, { like: findPost[0].like - 1 });
      } else {
        data = { likeList: [...user.likeList, idPost] };

        updatePost(idPost, { like: findPost[0].like + 1 });
      }

      updateUser(user.id, data);
    }
  };

  const createComment = async (id: string, data: any) => {
    return await api
      .patch(`posts/${id}`, data)
      .then((res) => {
        toast.success('Seu comentário foi publicado');
        console.log(res);
        setShowAddComment(false);
      })
      .catch((err) => console.error(err));
  };

  return (
    <UserContext.Provider
      value={{
        user,
        singIn,
        setIsLoading,
        getPosts,
        deletePost,
        getUser,
        updateUser,
        isLoading,
        createPost,
        registerUser,
        setUser,
        userIsValid,
        logOut,
        handleLikeClick,
        updatePost,
        showAddPost,
        setShowAddPost,
        createComment,
        posts,
        setPosts,
        showAddComment,
        setShowAddComment,
        showEditPost,
        setShowEditPost,
        menuEdit,
        setMenuEdit,
        setIdPost,
        idPost,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
