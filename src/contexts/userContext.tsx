import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Location, useLocation, useNavigate } from "react-router-dom";
import { FormDataDefault } from "../components/Input";
import { FormData } from "../pages/Login";
import { api } from "../services/api";

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
}

interface IUserContext {
  user: IUser | null;
  singIn: (dataForm: FormData) => Promise<any>;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  getPosts: () => Promise<void>;
  getUser: (id: string) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  updateUser: (id: string, data: any) => Promise<void>;
  isLoading: boolean;
  createPost: (data: any) => Promise<void>;
  registerUser: (data: FormDataDefault) => Promise<any>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null as IUser | null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation() as ILocationState;

  useEffect(() => {
    const token = localStorage.getItem('@token_devlov');
    const user = localStorage.getItem('@user_devlov');

    if (token !== null && user !== null) {
      userIsValid(token, JSON.parse(user));
    }
  }, []);

  const registerUser = async (data: FormDataDefault) => {
    const toastRegister = toast.loading('Verificando dados...');
    return await api
      .post('/register', data)
      .then(res => {
        toast.success('Usuario registrado com sucesso', {
          id: toastRegister
        });
        navigate('/', { replace: true })
      })
      .catch(err => {
        toast.error('Dados invalidos')
        console.error(err)
      })
  }

  const userIsValid = async (token : string, user: IUser) => {
    setIsLoading(true);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await api
      .get(`users/${user.id}`)
      .then(() => {
        setUser(user);
        const from = location.state?.from || location.pathname === '/' ? 'home' : location.pathname;
        console.log(location.state)
        navigate(from, { replace: true });
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };
  
  const singIn = async (dataForm: FormData) => {
    const toastSingIn = toast.loading('Autenticando...');
    return await api
      .post('login', dataForm)
      .then(({ data: {accessToken, user} }) => {
        toast.success("Autenticado", {
          id: toastSingIn
        })
        
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        localStorage.setItem('@token_devlov', accessToken);
        localStorage.setItem('@user_devlov', JSON.stringify(user));
        setUser(user)
        const from = location.state?.from || 'home';
        navigate(from, { replace: true })
      })
      .catch((err) => {
        toast.error("Ops! Email ou Senha invalidos.", {
          id: toastSingIn
        })
      })
  };

  const getPosts = async () => {
    return await api
      .get('posts')
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err))
  }

  const deletePost = async (id: string) => {
    return await api
      .delete(`posts/${id}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err))
  }

  const createPost = async (data: any) => {
    return await api
      .post('posts', data)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  const getUser = async (id: string) => {
    return await api
      .get(`users/${id}`)
      .then(({ data }) => console.log(data))
      .catch(err => console.log(err))
  }

  const updateUser = async (id: string, data:any) => {
    return await api
      .patch(`users/${id}`, data)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  return (
    <UserContext.Provider value={{ user, singIn, setIsLoading, getPosts, deletePost, getUser, updateUser, isLoading, createPost, registerUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;