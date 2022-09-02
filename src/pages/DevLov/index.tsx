import { CardContainer, DevLovContainer } from "./style";
import logo from "../../assets/logo.png";
import x from "../../assets/xdevlov.png";
import heart from "../../assets/heartDevLov.png";
import { AiFillInfoCircle } from "react-icons/ai";
import ButtonBack from "../../components/ButtonBack";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AiFillHeart } from "react-icons/ai";
import { api } from "../../services/api";
import { UserContext } from "../../contexts/userContext";
import axios from "axios";
import ModalLoading from "../../components/ModalLoading";

type IFrindList = Omit<IUsers, "password">;

interface IUsers {
  age: number;
  bio: string;
  city: string;
  email: string;
  friendList?: number[];
  gender: string;
  id: number;
  name: string;
  password: string;
  state: string;
  url_avatar: string;
}

const DevLov = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [count, setCount] = useState(0);
  const [isChange, setIsChange] = useState(false);
  const navigate = useNavigate();
  const icons = <AiFillHeart />;

  const { updateUser, user, isLoading } = useContext(UserContext);

  const toastAddFriend = () =>
    toast("Adicionado a lista de conexões", {
      duration: 1000,
      icon: <AiFillHeart color="red" size={24} />,
    });

  useEffect(() => {
    setIsChange(true);
    setTimeout(() => {
      setIsChange(false);
    }, 1000);
    api
      .get("users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);
  function addConection(event: any) {
    const idFriend = +event.target.id;
    const usersFilter: any = users.filter((user) => user.id == idFriend);
    const userFriends = {
      url_avatar: usersFilter[0].url_avatar,
      name: usersFilter[0].name,
      age: usersFilter[0].age,
      id: usersFilter[0].id,
    };
    if (user) {
      updateUser(user.id, { friendsList: [...user.friendsList, userFriends] });
    }
  }
  console.log(user);
  function addNoConection(event: any) {
    const idFriend = +event.target.id;
    if (user) {
      updateUser(user.id, { unFriendsList: [...user.unFriendsList, idFriend] });
    }
  }

  const functionNext = (event: any) => {
    if (count === users.length - 1) {
      toastAddFriend();
      addConection(event);
    } else {
      addConection(event);
      toastAddFriend();
      setIsChange(true);
      setTimeout(() => {
        setIsChange(true);
      }, 1000);
      setCount((oldCount: number) => oldCount + 1);
    }
  };
  const functionNextx = (event: any) => {
    if (count === users.length - 1) {
      addNoConection(event);
    } else {
      addNoConection(event);
      setIsChange(true);
      setTimeout(() => {
        setIsChange(true);
      }, 1000);
      setCount((oldCount: number) => oldCount + 1);
    }
  };

  const navigateToProfile = (event: any) => {
    const idProfile = event.target.parentNode.id;
    navigate(`/profile/${idProfile}`);
  };
  // return <ModalLoading />;
  return (
    <>
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
                <div className="nameAndinfo" id={users[count].id.toString()}>
                  <span>{users[count].name}</span>
                  <AiFillInfoCircle
                    id={users[count].id.toString()}
                    onClick={navigateToProfile}
                  />
                </div>
                <div className="button__container">
                  <button>
                    <img
                      onClick={functionNextx}
                      id={users[count].id.toString()}
                      src={x}
                      alt=""
                    />
                  </button>
                  <button>
                    <img
                      onClick={functionNext}
                      src={heart}
                      id={users[count].id.toString()}
                      alt=""
                    />
                  </button>
                </div>
              </div>
            </li>
          </CardContainer>
        ) : (
          <></>
        )}
      </DevLovContainer>
    </>
  );
};

export default DevLov;
