import Container from "./styles";
import logo from "./../../assets/logo.png"
import Input from "../../components/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const logOut = () => navigate("/", { replace: true })

  return (
    <Container>
      <form>
        <header>
          <img src={logo} alt="logo devlov" />
          <button onClick={e => {
            e.preventDefault()
            logOut()
          }}>Voltar</button>
        </header>

        <h1>Cadastro</h1>

        <Input label="Nome" placeholder="Digite seu nome" />
        <Input label="Email" placeholder="Digite seu email" />
        <Input label="Senha" placeholder="Digite sua senha" />
        <Input label="Confirme sua senha" placeholder="Confirme sua senha" />
        <div className="boxInputs">
          <Input label="Idade" placeholder="Digite sua idade" widthInput={48} />
          <div className="boxSelect">
            <label htmlFor="sexo">Sexo</label>
            <select name="sexo" id="sexo">
              <option value="Masculino">Masculino</option>
              <option value="Feminimo">Feminino</option>
            </select>
          </div>
        </div>
        <Input label="Cidade" placeholder="Digite seu cidade" />
        <Input label="Estado" placeholder="Digite seu estado" />
        
        <button>Cadastro</button>
      </form>
    </Container>
  )
}

export default Login;
