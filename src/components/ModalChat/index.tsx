import Modal from 'react-modal';
import ModalGlobal from './styles';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FiAlertCircle } from 'react-icons/fi';
import { SiGooglemessages } from 'react-icons/si'
import { FaUserAlt } from 'react-icons/fa';
import { useContext, useRef } from 'react';
import { ChatContext, IUser } from '../../contexts/chatContext';
import { UserContext } from '../../contexts/userContext';
import { AnyMessageParams } from 'yup/lib/types';
Modal.setAppElement("#root");

interface IMessage {
  content: string;
  from: string;
  id: string;
  fromSelf: boolean;
}

const ModalChat = () => {
  const { setModalChatIsOpen, modalChatIsOpen, userIDSelected, onlineUsers, selectRecipientUser, setMessageContent, submitMessage, recipientUser } = useContext(ChatContext);
  const { user: userFromContext } = useContext(UserContext);
  const inputSubmit: any = useRef({});

  const resetInput = () => {
    inputSubmit.current.value = "";
  }

  return (
    <>
      <ModalGlobal />
      <Modal
        isOpen={modalChatIsOpen}
        onRequestClose={() => {
          setModalChatIsOpen(false)
        }}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className='header'>
          <div>
            <h2>Chat</h2>
            <SiGooglemessages size={30} color='var(--color-0)'/>
          </div>
          <button onClick={() => setModalChatIsOpen(false)}>
            <AiFillCloseCircle size={30} />
          </button>
        </div>
        
        <div className='boxChat'>
          <ul>
            {onlineUsers?.map((user: IUser )=> {
              return !(user.userID === userIDSelected)
              &&
              (userFromContext?.friendsList?.some(({ id }) => id === user.userID)) && (
                <li onClick={() => selectRecipientUser(user)} key={user.userID}>
                  <p className={recipientUser.userID === user.userID ? "select" : ""} >{user.username}</p>
                  {user.hasNewMessage && (<FiAlertCircle size={25} color='#ff5959' />)}
                </li>
              )
            })}
          </ul>
          <div className='containerChat'>
            <h2>{userFromContext?.name}</h2>
            {Object.keys(recipientUser).length > 0 
              ? (
              <>
                <ul id='listMessages' className='listMessages'>
                {recipientUser?.messages?.map((mes: IMessage) => {
                    return (
                      <li key={mes.id} className={mes.fromSelf ? 'me' : ''}>
                        <p>{mes.content}</p>
                      </li>
                    )
                  })}
                </ul>

                <div className='boxMessageInput'>
                  <input ref={inputSubmit} id='inputSubmit' onChange={e => setMessageContent(e.target.value)} type="text" placeholder='Digite aqui' />
                  <button onClick={() => {
                    resetInput();
                    submitMessage();
                    setMessageContent("");
                    }}>Enviar</button>
                </div>
              </>
            )
              : (
              <h3>Selecione um usuario <span><FaUserAlt /></span></h3>
            )}            
          </div>
        </div>
      </Modal>
    </>
  )
}

export default ModalChat;