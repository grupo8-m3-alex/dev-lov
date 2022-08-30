import Container from "./styles";
import logo from "./../../assets/logo.png"
import Input from "../../components/Input";

const Login = () => (
  <Container>
    <form>
      <header>
        <img src={logo} alt="logo devlov" />
        <button>Voltar</button>
      </header>

      <h1>Cadastro</h1>

      <Input label="Nome" placeholder="Digite seu nome" />
      <Input label="Email" placeholder="Digite seu email" />
      <Input label="Senha" placeholder="Digite sua senha" />
      <Input label="Confirme sua senha" placeholder="Confirme sua senha" />
      <Input label="Cidade" placeholder="Digite seu cidade" />
      <Input label="Estado" placeholder="Digite seu estado" />
      <Input label="Idade" placeholder="Digite sua idade" />
      
    </form>
  </Container>
)

export default Login;
