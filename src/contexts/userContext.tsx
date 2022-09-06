import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { FormDataDefault } from "../components/Input";
import { IPosts } from "../pages/Home";
import { FormData } from "../pages/Login";
import { api } from "../services/api";

interface IUserProvider {
  children: ReactNode;
}

interface ILocationState extends Location {
  state: {
    from: string | null;
  }
}

export interface IUser {
  id: number | undefined;
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
}

interface IUserContext {
  user?: IUser | null;
  singIn: (dataForm: FormData) => Promise<any>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getPosts: () => Promise<void>;
  getUser: (id: string) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  updateUser: (id: number, data: any) => Promise<void>;
  isLoading: boolean;
  createPost: (data: any) => Promise<void>;
  registerUser: (data: FormDataDefault) => Promise<any>;
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
  setUser: Dispatch<SetStateAction<IUser | null>>;
  userIsValid: any;
  setIdEditPost: Dispatch<SetStateAction<number>>;
  idEditPost: number;
  updatePost: (id: number, data: any) => Promise<void>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showAddPost, setShowAddPost] = useState<boolean>(false);
  const [menuEdit, setMenuEdit] = useState<boolean>(false);
  const [showEditPost, setShowEditPost] = useState<boolean>(false);
  const [showAddComment, setShowAddComment] = useState<boolean>(false);
  const [idEditPost, setIdEditPost] = useState<number>(0);
  const [posts, setPosts] = useState<IPosts[]>([]);
  const navigate = useNavigate();
  const location = useLocation() as ILocationState;


  useEffect(() => {
    const token = localStorage.getItem("@token_devlov");
    const user = localStorage.getItem("@user_devlov");

    if (token !== null && user !== null) {
      userIsValid(token, JSON.parse(user));
    }
  }, []);

  const registerUser = async (data: FormDataDefault) => {
    data.friendList = [];
    data.unFriendsList = [];
    const toastRegister = toast.loading("Verificando dados...");
    return await api
      .post("/register", data)
      .then((res) => {
        toast.success("Usuario registrado com sucesso", {
          id: toastRegister,
        });
        navigate("/", { replace: true });
      })
      .catch((err) => {
        toast.error("Dados invalidos");
        console.error(err);
      });
  };

  const userIsValid = async (token: string, user: IUser) => {
    setIsLoading(true);
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`
    return await api
      .get(`users/${user.id}`)
      .then(() => {
        setUser(user);
        const from = location.state?.from || location.pathname === '/' ? 'home' : location.pathname
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false))
  }

  const singIn = async (dataForm: FormData) => {
    const toastSingIn = toast.loading("Autenticando...");
    return await api
      .post("login", dataForm)
      .then(({ data: { accessToken, user } }) => {
        toast.success("Autenticado", {
          id: toastSingIn,
        });

        api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        localStorage.setItem("@token_devlov", accessToken);
        localStorage.setItem("@user_devlov", JSON.stringify(user));
        setUser(user);
        const from = location.state?.from || "home";
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error("Ops! Email ou Senha invalidos.", {
          id: toastSingIn,
        });
        console.log(err)
      });
  };

  const getPosts = async () => {
    return await api
      .get('posts')
      .then(({ data }) => setPosts(data))
      .catch(err => console.error(err))
  }

  const deletePost = async (id: string) => {
    return await api
      .delete(`posts/${id}`)
      .then(res => {
        toast.success("A publicação foi excluída")
        getPosts()
      })
      .catch((err) => console.error(err));
  };

  const createPost = async (data: any) => {
    return await api
      .post('posts', data)
      .then(res => {
        toast.success("Sua publicação foi enviada")
        setShowAddPost(false)})
      .catch(err => {
        toast.error("Ops... Algo deu errado")
        console.error(err)})
  }

  const getUser = async (id: string) => {
    return await api
      .get(`users/${id}`)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  const updateUser = async (id: number, data: any) => {
    return await api
      .patch(`users/${id}`, data)
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }

  const createComment = async (id: string, data: any) => {
    return await api
      .patch(`posts/${id}`, data)
      .then(res => {
        toast.success("Seu comentário foi publicado")
        console.log(res)
        setShowAddComment(false)
        getPosts()
      })
      .catch(err => console.error(err))
  }

  const updatePost = async (id: number, data: any) => {
    return await api
      .patch(`posts/${id}`, data)
      .then(res => {
        toast.success("Sua publicação foi alterada")
        setShowEditPost(false)
      })
      .catch(err => console.error(err))
  }
 

  return (
    <UserContext.Provider value={{ idEditPost, setIdEditPost, updatePost, userIsValid, menuEdit, setMenuEdit, showEditPost, setShowEditPost, user, singIn, setIsLoading, getPosts, deletePost, getUser, updateUser, isLoading, createPost, registerUser, showAddPost, setShowAddPost, createComment, posts, setPosts, showAddComment, setShowAddComment }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
