import { useState } from 'react';
import Modal from 'react-modal';
import { ModalFriendContainer } from './styled';
import { MdOutlineGroupOff } from 'react-icons/md';

Modal.setAppElement('#root');

const ModalFriendList = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ModalFriendContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <div className="header">
            <h1>Conexões</h1>
            <button>X</button>
          </div>
          <div className="MainContainer">
            <ul>
              <li>
                <img src="" alt="" />
                <div>
                  <span>Joao Vitor Henrique</span>
                  <span>25 anos</span>
                </div>
                <MdOutlineGroupOff />
              </li>
              <li>
                <img src="" alt="" />
                <div>
                  <span>Joao Vitor Henrique</span>
                  <span>25 anos</span>
                </div>
                <MdOutlineGroupOff />
              </li>
              <li>
                <img src="" alt="" />
                <div>
                  <span>Joao Vitor Henrique</span>
                  <span>25 anos</span>
                </div>
                <MdOutlineGroupOff />
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalFriendList;
