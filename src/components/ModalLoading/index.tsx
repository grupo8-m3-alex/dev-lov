import ModalLoadingStyle from "./styles";
import { AiFillHeart } from "react-icons/ai";

const ModalLoading = () => {
  return (
    <ModalLoadingStyle>
      <div></div>
      <AiFillHeart />
      <AiFillHeart className="heart" />
    </ModalLoadingStyle>
  );
};

export default ModalLoading;
