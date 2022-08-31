import { CardContainer, DevLovContainer } from "./style";
import Imagem from "../../Assets/Rectangle 19.png";
import logo from "../../Assets/logo.png";
import x from "../../Assets/xDevLov.png";
import heart from "../../Assets/heartDevLov.png";
import { AiFillInfoCircle } from "react-icons/ai";
import ButtonBack from "../../components/ButtonBack";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { number } from "yup";
import toast, { Toaster } from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";

type IFrindList = Omit<IUsers, "password">;

interface IUsers {
  age: number;
  bio: string;
  city: string;
  email: string;
  friendList?: IFrindList[];
  gender: string;
  id: number;
  name: string;
  password: string;
  state: string;
  url_avatar: string;
}

const DevLov = () => {
  const [users, setUsers] = useState<IUsers[]>({} as IUsers[]);
  const [count, setCount] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const navigate = useNavigate();
  const icons = <AiFillHeart />;
  const toastAddFriend = () =>
    toast("Adicionado a lista de conexões", {
      duration: 1000,
      icon: <AiFillHeart color="red" size={24} />,
    });

  useEffect(() => {
    axios("https://json-server-apikenzie.herokuapp.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  const functionNext = () => {
    if (count === users.length - 1) {
      toastAddFriend();
    } else {
      toastAddFriend();
      setIsChange(true);
      setTimeout(() => {
        setIsChange(true);
      }, 1000);
      setCount((oldCount: number) => oldCount + 1);
    }
  };
  const functionNextx = () => {
    if (count === users.length - 1) {
    } else {
      setIsChange(true);
      setTimeout(() => {
        setIsChange(true);
      }, 1000);
      setCount((oldCount: number) => oldCount + 1);
    }
  };
  return (
    <DevLovContainer>
      <div className="header__devlov">
        <img src={logo} alt="" />
        <ButtonBack onClick={() => navigate("/home")} />
      </div>
      {users.length > 0 ? (
        <CardContainer isChange={isChange}>
          <li>
            <div>
              <img
                className="AvatarImage"
                src={users[count].url_avatar}
                alt=""
              />
              <div className="nameAndinfo">
                <span>{users[count].name}</span>
                <AiFillInfoCircle onClick={() => navigate("/profile")} />
              </div>
              <div className="button__container">
                <button>
                  <img onClick={functionNextx} src={x} alt="" />
                </button>
                <button>
                  <img onClick={functionNext} src={heart} alt="" />
                </button>
              </div>
            </div>
          </li>
        </CardContainer>
      ) : (
        <></>
      )}
    </DevLovContainer>
  );
};

export default DevLov;
