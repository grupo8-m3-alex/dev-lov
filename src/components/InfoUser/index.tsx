import { useContext, useEffect, useState } from 'react';
import { IUser, UserContext } from '../../contexts/userContext';
import ModalEditProfile from '../ModalEditProfile';
import { Bio, Card, Count, Info } from './styles';
import { BsPencil } from 'react-icons/bs';

interface IInfoUserProps {
  id: number;
}

const InfoUser = ({ id }: IInfoUserProps) => {
  const { user, posts, getUser } = useContext(UserContext);

  const [infoUser, setInfoUser] = useState<IUser>({} as IUser);

  const [isModalEditProfileOpen, setIsModalEditProfileOpen] = useState(false);

  const filteredPosts = posts.filter((post) => post.userId === Number(id));

  const openModal = () => {
    setIsModalEditProfileOpen(true);
  };

  const closeModal = () => {
    setIsModalEditProfileOpen(false);
  };

  useEffect(() => {
    getUser(id).then((resp) => {
      setInfoUser(resp);
    });
  }, [user, id]);

  return (
    <Card>
      <Info>
        <figure
          onClick={() => {
            if (id === user?.id) {
              openModal();
            }
          }}
        >
          <img src={infoUser?.url_avatar} alt="foto de usuário" />
          {user?.id === id && (
            <div>
              <BsPencil color="white" />
            </div>
          )}
        </figure>
        <div>
          <h3>{infoUser?.name}</h3>
          <span>{infoUser?.age} anos</span>
          <span>{infoUser?.city}</span>
        </div>
      </Info>
      <Bio>
        <p>{infoUser?.bio}</p>
      </Bio>
      <Count>
        <span>
          {filteredPosts.length}{' '}
          {filteredPosts.length === 1 ? 'Publicação' : 'Publicações'}
        </span>
        <span>
          {infoUser?.friendsList?.length}{' '}
          {infoUser?.friendsList?.length === 1 ? 'Conexão' : 'Conexões'}{' '}
        </span>
      </Count>
      {isModalEditProfileOpen && (
        <ModalEditProfile
          isModalOpen={isModalEditProfileOpen}
          closeModal={closeModal}
        />
      )}
    </Card>
  );
};

export default InfoUser;
