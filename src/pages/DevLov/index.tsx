import { CardContainer, DevLovContainer } from './style';
import logo from '../../assets/logo.png';
import x from '../../assets/xdevlov.png';
import heart from '../../assets/heartDevLov.png';
import { AiFillInfoCircle } from 'react-icons/ai';
import ButtonBack from '../../components/ButtonBack';
import { ReactNode, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AiFillHeart } from 'react-icons/ai';
import { api } from '../../services/api';
import { IUser, UserContext } from '../../contexts/userContext';
import axios from 'axios';
import ModalLoading from '../../components/ModalLoading';
import ModalFriendList from '../../components/ModalFriendList';

type IFrindList = Omit<IUsers, 'password'>;

type IEvent = {
  event: EventTarget;
  target: HTMLElement;
};

interface IUsers {
  age: number;
  bio: string;
  city: string;
  email: string;
  friendList?: number[];
  gender: string;
  id: number;
  name: string;
  password?: string;
  state: string;
  url_avatar: string;
}

const DevLov = () => {
  const [users, setUsers] = useState<IUsers[]>([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const icons = <AiFillHeart />;
  const [haveUsers, setHaveUsers] = useState(true);
  const [cardClassAnimation, setCardClassAnimation] = useState('');

  const { updateUser, user } = useContext(UserContext);

  const toastAddFriend = () =>
    toast('Adicionado a lista de conexões', {
      duration: 1000,
      icon: <AiFillHeart color="red" size={24} />,
    });

  useEffect(() => {
    api
      .get('users')
      .then(({ data }) => {
        const filterUser: IUser[] = data.filter(
          (elem: IUser) => elem.id !== user?.id
        );
        const filterFriends: any = filterUser.filter((elem) => {
          if (!user?.friendsList?.some((item) => item.id === elem.id)) {
            return elem;
          }
        });

        const unFilterFriends: IUsers[] = filterFriends.filter(
          (elem: IUser) => {
            if (
              !user?.unFriendsList?.some((item: number) => item === elem.id)
            ) {
              return elem;
            }
          }
        );
        setUsers(unFilterFriends);
      })
      .catch((err) => console.error(err));
  }, []);

  function addConection(event: IEvent) {
    const idFriend = +event.target.id;
    const usersFilter = users.filter((user) => user.id == idFriend);
    const userFriends = {
      url_avatar: usersFilter[0].url_avatar,
      name: usersFilter[0].name,
      age: usersFilter[0].age,
      id: usersFilter[0].id,
    };
    if (user) {
      updateUser(user.id, {
        friendsList: [...user.friendsList, userFriends],
      });
    }
  }

  function addNoConection(event: IEvent) {
    const idFriend = +event.target.id;
    if (user) {
      updateUser(user.id, {
        unFriendsList: [...user.unFriendsList, idFriend],
      });
    }
  }

  const functionNext = (event: any) => {
    if (count === users.length - 1) {
      const findUser = !user?.friendsList.find(
        (elem) => elem.id === +event.target.id
      );
      if (findUser) {
        toastAddFriend();
        setHaveUsers(false);
      }

      addConection(event);
    } else {
      addConection(event);
      setCardClassAnimation('heart');
      toastAddFriend();
      setTimeout(() => {
        setCardClassAnimation('');
      }, 500);
      setCount((oldCount: number) => oldCount + 1);
    }
  };
  const functionNextx = (event: any) => {
    if (count === users.length - 1) {
      const findUser = !user?.unFriendsList.find(
        (elem: number) => elem === +event.target.id
      );
      if (findUser) {
        setHaveUsers(false);
      }
      addNoConection(event);
    } else {
      addNoConection(event);
      setCardClassAnimation('noHeart');
      setTimeout(() => {
        setCardClassAnimation('');
      }, 1000);
      setCount((oldCount: number) => oldCount + 1);
    }
  };

  const navigateToProfile = (event: any) => {
    const idProfile = event.target.parentNode.id;
    navigate(`/profile/${idProfile}`);
  };

  if (!haveUsers) {
    return (
      <DevLovContainer>
        <div className="header__devlov">
          <img src={logo} alt="" />
          <ButtonBack onClick={() => navigate('/home')} />
        </div>
        <div className="divImgFrinds">
          <div className="border1"></div>
          <div className="border2"></div>
          <div className="border3"></div>
          <div className="border4"></div>
          <img className="imgNoFriends" src={user?.url_avatar} alt="" />
          <span className="searchNewUsers">Procurando novos usuarios...</span>
        </div>
      </DevLovContainer>
    );
  }

  return (
    <>
      <DevLovContainer>
        <div className="header__devlov">
          <img src={logo} alt="" />
          <ButtonBack onClick={() => navigate('/home')} />
        </div>

        {users.length > 0 ? (
          <CardContainer cardAnimation={cardClassAnimation}>
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
          <>
            <div className="divImgFrinds">
              <div className="border1"></div>
              <div className="border2"></div>
              <div className="border3"></div>
              <div className="border4"></div>
              <img className="imgNoFriends" src={user?.url_avatar} alt="" />
              <span className="searchNewUsers">
                Procurando novos usuarios...
              </span>
            </div>
          </>
        )}
      </DevLovContainer>
    </>
  );
};

export default DevLov;

function baljhds() {
  return (
    <div className="dropdoen">
      <div className="inicial"></div>
      <div className="divqvdjhdf"></div>
    </div>
  );
}
