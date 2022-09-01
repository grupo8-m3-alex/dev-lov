import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FormDataDefault } from "../components/Input";
import { FormData } from "../pages/Login";
import { api } from "../services/api";

interface IUserProvider {
  children: ReactNode;
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
  registerUser: (data: FormDataDefault) => Promise<any>;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const [user, setUser] = useState<IUser | null>(null as IUser | null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem('@token_devlov');
    const user = localStorage.getItem('@user_devlov');

    if (token !== null && user !== null) {
      userIsValid(token, JSON.parse(user));
    }
  }, [])

  const userIsValid = async (token : string, user: IUser) => {
    setIsLoading(true);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return await api
      .get(`users/${user.id}`)
      .then(() => {
        setUser(user);
        const from = location.state?.from || 'home';
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

  const registerUser = async (data: FormDataDefault) => {
    const {
      name,
      email,
      url_avatar,
      password,
      confirmPassword,
      age,
      bio,
      city,
      state,
      gender,
    } = data;
    const toastRegister = toast.loading('Checando dados...');
    return await api
      .post('register', {
        name,
        email,
        url_avatar,
        password,
        confirmPassword,
        age,
        bio,
        city,
        state,
        gender,
      })
      .then((res) => {
        toast.success("Usuario cadastrado", {
          id: toastRegister
        })
        navigate('/', { replace: true });
        return res.data
      })
      .catch((err) => {
        toast.error("Dados invalidos", {
          id: toastRegister
        })
        return err
      });
  };

  if (isLoading) return (<h1>Carregando</h1>)

  return (
    <UserContext.Provider value={{ user, singIn, setIsLoading, registerUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;