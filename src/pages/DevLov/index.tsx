import { CardContainer, DevLovContainer } from "./style";
import Imagem from "../../Assets/Rectangle 19.png";
import logo from "../../Assets/logo.png";
import x from "../../Assets/xDevLov.png";
import heart from "../../Assets/heartDevLov.png";
import { AiFillInfoCircle } from "react-icons/ai";
import ButtonBack from "../../components/ButtonBack";
import { useEffect, useState } from "react";
import axios from "axios";

// interface IUsers {
//   users: any;
//   setUsers: any;
// }

const DevLov = () => {
  const [users, setUsers] = useState<any>({});
  const [count, setCount] = useState<any>(0);
  useEffect(() => {
    axios("https://json-server-apikenzie.herokuapp.com/users").then(
      (response) => setUsers(response.data)
    );
  }, []);

  const functionNext = () => {
    if (count === users.length - 1) {
    } else {
      setCount((oldCount: number) => oldCount + 1);
    }
  };
  return (
    <DevLovContainer>
      <div className="header__devlov">
        <img src={logo} alt="" />
        <ButtonBack />
      </div>
      {users.length > 0 ? (
        <CardContainer>
          <li>
            <div>
              <img src={users[count].url_avatar} alt="" />
              <div className="nameAndinfo">
                <span>{users[count].name}</span>
                <AiFillInfoCircle />
              </div>
              <div className="button__container">
                <button>
                  <img onClick={functionNext} src={x} alt="" />
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
