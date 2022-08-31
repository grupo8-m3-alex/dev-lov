import { ContainerButonBack } from "./style";

interface IpropsButton {
  onClick: () => void;
}

const ButtonBack = ({ onClick }: IpropsButton) => {
  return <ContainerButonBack onClick={onClick}>Voltar</ContainerButonBack>;
};

export default ButtonBack;
