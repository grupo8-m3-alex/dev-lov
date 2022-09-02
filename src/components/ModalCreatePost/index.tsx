import { defaultListboxReducer } from "@mui/base";
import React, { useState } from "react";
import Modal from "react-modal";
import { ModalAddContainer } from "./styled";

Modal.setAppElement("#root");

const ModalAddPost = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ModalAddContainer />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div>
          <div className="Header_modalAdd">
            <h3>Criar Publicação</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="imgaAndName">
            <img src="" alt="" />
            <span>Joao Vitor Henrique</span>
          </div>
          <div>
            <form>
              <textarea />
              <button>Publicar</button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalAddPost;
