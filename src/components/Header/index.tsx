import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ModalFriendList from '../ModalFriendList';
import { UserContext } from '../../contexts/userContext';

import { CgMenuRound } from 'react-icons/cg';
import {
  FaUserAlt,
  FaUserFriends,
  FaHeart,
  FaSignOutAlt,
} from 'react-icons/fa';
import logo from '../../assets/logo.png';
import heart from '../../assets/heart.png';

import { Button, Dropmenu, Figure, HeaderStyled } from './styles';

const Header = () => {
  const { user, logOut } = useContext(UserContext);
  const [modalIsOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeModal = () => setIsOpen(false);

  return (
    <HeaderStyled>
      <div>
        <img
          className="logo"
          src={logo}
          onClick={() => navigate('/home', { replace: true })}
        />
        <div className="menuMobile">
          <CgMenuRound />
          <Dropmenu>
            <Button
              bg="gray"
              onClick={() => navigate('/dashboard', { replace: true })}
            >
              <FaUserAlt />
              <span>Perfil</span>
            </Button>

            <Button onClick={() => setIsOpen(true)}>
              <FaUserFriends />
              <span>Conexões</span>
            </Button>
            <Button
              bg="gray"
              onClick={() => navigate('/devlov', { replace: true })}
            >
              <FaHeart />
              <span>DevLov</span>
            </Button>
            <Button onClick={logOut}>
              <FaSignOutAlt />
              <span>Sair</span>
            </Button>
          </Dropmenu>
        </div>
        <div className="right">
          <img
            onClick={() => navigate('/devlov', { replace: true })}
            className="heart"
            src={heart}
            alt="dev-lov"
          />
          <Figure>
            <img className="avatarUser" src={user?.url_avatar} />
            <Dropmenu>
              <Button
                bg="gray"
                onClick={() => navigate('/dashboard', { replace: true })}
              >
                <FaUserAlt />
                <span>Perfil</span>
              </Button>

              <Button onClick={() => setIsOpen(true)}>
                <FaUserFriends />
                <span>Conexões</span>
              </Button>
              <Button
                bg="gray"
                onClick={() => navigate('/devlov', { replace: true })}
              >
                <FaHeart />
                <span>DevLov</span>
              </Button>
              <Button onClick={logOut}>
                <FaSignOutAlt />
                <span>Sair</span>
              </Button>
            </Dropmenu>
          </Figure>
        </div>
      </div>
      {modalIsOpen && (
        <ModalFriendList isModalOpen={modalIsOpen} closeModal={closeModal} />
      )}
    </HeaderStyled>
  );
};

export default Header;
