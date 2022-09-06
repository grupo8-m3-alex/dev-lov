import { useContext } from 'react';
import { TiMessages } from  'react-icons/ti';
import { IoMdNotifications } from 'react-icons/io';
import { ChatContext } from '../../contexts/chatContext';
import SpanChat from './styles';

const ButtonChat = () => {
  const { setModalChatIsOpen, onlineUsers } = useContext(ChatContext);


  return (
    <SpanChat onClick={() => setModalChatIsOpen(true)}>
      <TiMessages size={40} color='white'/>
      {onlineUsers.some(({ hasNewMessage }) => hasNewMessage)
        && 
        (<IoMdNotifications className='notification' size={30} color='var(--color-2)'/>)}
    </SpanChat>
  )
}

export default ButtonChat;