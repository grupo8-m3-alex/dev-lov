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

      <Input label="Nome" placeholder="Nome" />
      <Input label="Email" placeholder="Email" />
      <Input label="Senha" placeholder="Senha" />
      <Input label="Confirme sua senha" placeholder="Confirme sua senha" />
      <Input label="Cidade" placeholder="Cidade" />
      <Input label="Estado" placeholder="Estado" />
      <Input label="Idade" placeholder="Idade" />

    </form>
  </Container>
)

export default Login;
