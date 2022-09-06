import { Button, Dropmenu, Figure, HeaderStyled } from './styles';
import heart from '../../assets/heart.png';
import logo from '../../assets/logo.png';
import { CgMenuRound } from 'react-icons/cg';
import {
  FaUserAlt,
  FaUserFriends,
  FaHeart,
  FaSignOutAlt,
} from 'react-icons/fa';
import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';
import ModalFriendList from '../ModalFriendList';

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
        <CgMenuRound />
        <div>
          <img className="heart" src={heart} alt="dev-lov" />
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
