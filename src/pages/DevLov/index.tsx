import { Container } from "./style";
import Imagem from "../../Assets/person_img.png";
import logo from "../../Assets/logo.png";

const DevLov = () => (
  <>
    <div>
      <img src={logo} alt="" />
    </div>
    <Container>
      <div>
        <img src={Imagem} alt="" />
      </div>
    </Container>
  </>
);

export default DevLov;