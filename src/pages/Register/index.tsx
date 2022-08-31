import Container from "./styles";
import logo from "./../../assets/logo.png"
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import schemaRegister from "../../validations/schemaRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormDataDefault } from "../../components/Input";
import { registerUser } from "../../services/api";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const logOut = () => navigate("/", { replace: true });
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataDefault>({
    resolver: yupResolver(schemaRegister)
  });


  const submitForm = (data: FormDataDefault) => {
    toast.promise(registerUser(data), {
      loading: 'Verificando dados',
      success: () => {
        navigate('/', { replace: true })
        return 'Registrado com sucesso';
      },
      error: 'Erro ao criar o usuario'
    })
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(submitForm)}>
        <header>
          <img src={logo} alt="logo devlov" />
          <button onClick={e => {
            e.preventDefault()
            logOut()
          }}>Voltar</button>
        </header>

        <h1>Cadastro</h1>

        <Input error={errors.name?.message} register={register("name")} type="text" label="Nome" placeholder="Digite seu nome" />
        <Input error={errors.email?.message} register={register("email")} type="text" label="Email" placeholder="Digite seu email" />
        <Input error={errors.url_avatar?.message} register={register("url_avatar")} type="url" label="Link do Vatar" placeholder="Digite o Link" />
        <Input error={errors.password?.message} register={register("password")} type="password" label="Senha" placeholder="Digite sua senha" />
        <Input error={errors.confirmPassword?.message} register={register("confirmPassword")} type="password" label="Confirme sua senha" placeholder="Confirme sua senha" />
        <div className="boxInputs">
          <Input error={errors.age?.message} register={register("age")} type="text" label="Idade" placeholder="Digite sua idade" widthInput={48} />
          <div className="boxSelect">
            <label htmlFor="gender">Sexo</label>
            <select defaultValue="Masculino" {...register("gender")} name="sexo" id="sexo">
              <option value="Masculino">Masculino</option>
              <option value="Feminimo">Feminino</option>
            </select>
          </div>
        </div>
        
        <Input error={errors.bio?.message} register={register("bio")} type="text" label="Bio" placeholder="Digite sua bio" />
        <Input error={errors.city?.message} register={register("city")} type="text" label="Cidade" placeholder="Digite seu cidade" />
        <Input error={errors.state?.message} register={register("state")} type="text" label="Estado" placeholder="Digite seu estado" />
        
        <button>Cadastro</button>
      </form>
    </Container>
  )
}

export default Login;
