import { useContext } from 'react';
import Modal from 'react-modal';
import { ModalFriendContainer } from './styled';
import { MdOutlineGroupOff } from 'react-icons/md';
import { UserContext } from '../../contexts/userContext';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

interface IModalFriendListProps {
  closeModal: () => void;
  isModalOpen: boolean;
}

const ModalFriendList = ({
  closeModal,
  isModalOpen,
}: IModalFriendListProps) => {
  const { user, updateUser } = useContext(UserContext);

  const navigate = useNavigate();

  const deleteFriend = (id: number) => {
    const newFriends = user?.friendsList.filter((friend) => friend.id !== id);
    if (user) {
      updateUser(user?.id, { friendsList: newFriends });
    }
  };

  return (
    <>
      <ModalFriendContainer />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="Modal1"
        overlayClassName="Overlay"
      >
        <div>
          <div className="header">
            <h1>Conexões</h1>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="MainContainer">
            <ul>
              {user?.friendsList.map((resp) => (
                <li key={resp.id}>
                  <img
                    src={resp.url_avatar}
                    alt=""
                    onClick={() => {
                      closeModal();
                      navigate(`/profile/${resp.id}`, { replace: true });
                    }}
                  />
                  <div>
                    <span>{resp.name}</span>
                    <span>{resp.age} anos</span>
                  </div>
                  <button onClick={() => deleteFriend(resp.id)}>
                    <MdOutlineGroupOff />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalFriendList;