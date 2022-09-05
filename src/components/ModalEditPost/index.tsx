import React, { useState } from "react";
import Modal from "react-modal";
import { ModalEditContainer } from "./styled";

Modal.setAppElement("#root");

const ModalEditPost = () => {
  const [modalIsOpen, setIsOpen] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ModalEditContainer />
      <Modal>
        <div>
          <div className="Header_modalAdd">
            <h3>Editar Publicação</h3>
            <button onClick={closeModal}>X</button>
          </div>
          <div className="imgaAndName">
            <img src="" alt="" />
            <span>Joao Vitor Henrique</span>
          </div>
          <div>
            <form>
              <textarea />
              <div className="buttonContainer">
                <button className="buttonDelete">Excluir</button>
                <button className="buttonPubli">Publicar</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalEditPost;
