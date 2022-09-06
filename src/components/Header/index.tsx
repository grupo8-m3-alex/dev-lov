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
import { useContext } from 'react';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { user, logOut } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <div>
        <img className="logo" src={logo} />
        <CgMenuRound />
        <div>
          <img className="heart" src={heart} alt="dev-lov" />
          <Figure>
            <img className="avatarUser" src={user?.url_avatar} />
            <Dropmenu>
              <Button bg="gray">
                <FaUserAlt />
                <span>Perfil</span>
              </Button>

              <Button>
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
    </HeaderStyled>
  );
};

export default Header;
