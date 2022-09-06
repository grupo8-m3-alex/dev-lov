import React, { useState, useContext } from "react";
import Modal from "react-modal";
import { ModalFriendContainer } from "./styled";
import { MdOutlineGroupOff } from "react-icons/md";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

Modal.setAppElement("#root");

const ModalFriendList = () => {
  const [modalIsOpen, setIsOpen] = useState(true);
  const { user, updateUser } = useContext(UserContext);
  console.log(user?.friendsList);
  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const deleteFriend = (id: number) => {
    const newFriends = user?.friendsList.filter(friend => friend.id !== id)
    console.log(newFriends)
    if (user){
      updateUser(user?.id, {friendsList: newFriends})
    }
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
              {user?.friendsList.map((resp) => ( 
                <li key= {resp.id}>
                  <img src={resp.url_avatar} alt="" onClick={() => navigate(`/profile/${resp.id}`)}/>
                  <div>
                    <span>{resp.name}</span>
                    <span>{resp.age} anos</span>
                  </div>
                  <button onClick={() => deleteFriend(resp.id)}>
                    <MdOutlineGroupOff/>
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
