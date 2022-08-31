import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaLogin } from '../../validations/schemaLogin';

import { IoEyeSharp } from 'react-icons/io5';
import { BsFillEyeSlashFill } from 'react-icons/bs';
import { Button, Container, Form, Password } from './styles';

import logo from '../../Assets/Group 29.png';
import toast, { Toaster } from 'react-hot-toast';
import { api } from '../../services/api';
import Input from '../../components/Input';

export interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });

  const [isFocused, setIsFocused] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schemaLogin),
  });

  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const login = async (data: FormData) => {
    toast.promise(api.post('login', data), {
      loading: 'Autenticando...',
      success: ({ data }) => {
        localStorage.setItem('@token_devlov', data.accessToken);
        api.defaults.headers.common['Authorization'] = data.accessToken;
        navigate('/home');
        return 'Autenticado';
      },
      error: 'Ops! Email ou Senha incorretas',
    });
  };

  return (
    <>
      <Container>
        <div>
          <img src={logo} alt="logo dev-lov" />
          <Form onSubmit={handleSubmit(login)}>
            <h1>Login</h1>
            <Input
              error={errors.email?.message}
              register={register('email')}
              type="text"
              label="Email"
              placeholder="Digite seu email"
            />
            <div>
              <label>Password</label>
              <Password isFocused={isFocused}>
                <input
                  {...register('password')}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  type={values.showPassword ? 'text' : 'password'}
                  placeholder="Digite sua senha"
                />
                <div onClick={handleClickShowPassword}>
                  {values.showPassword ? (
                    <IoEyeSharp size={24} />
                  ) : (
                    <BsFillEyeSlashFill size={24} />
                  )}
                </div>
              </Password>
              {errors && (
                <span className="passwordError">
                  {errors.password?.message}
                </span>
              )}
            </div>

            <Button type="submit">Login</Button>

            <h3>Não possue conta?</h3>

            <Button type="button" onClick={() => navigate('/register')}>
              Cadastre
            </Button>
          </Form>
        </div>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};

export default Login;
