import io from 'socket.io-client';
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface IChatProvider {
  children: ReactNode;
}

export interface IUser {
  hasNewMessage: boolean;
  messages: []
  socketID: string;
  userID: number;
  username: string;
}

interface IChatContext {
  userIDSelected: number;
  onlineUsers: IUser[];
  selectRecipientUser: (user: IUser) => void;
  submitMessage: () => void;
  setMessageContent: Dispatch<SetStateAction<string>>;
  sendUserID: (userID: number, username: string) => void;
  modalChatIsOpen: boolean;
  setModalChatIsOpen: Dispatch<SetStateAction<boolean>>;
  setRecipientUser: Dispatch<SetStateAction<IUser>>;
  recipientUser: IUser;
}

interface IArrivalMessage {
  content: string
  from: string
  id: string
  fromSelf: boolean
}

export const ChatContext = createContext<IChatContext>({} as IChatContext);

/* const URL = "https://server-chat-devlov.herokuapp.com/"; */

const URL = 'https://serve-devlov-chat.herokuapp.com/';
const socket = io(URL, { autoConnect: false });

const ChatProvider = ({ children }: IChatProvider) => {
  const [userIDSelected, setUserIDSelected ] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState<IUser[]>([]);
  const [recipientUser, setRecipientUser] = useState<IUser>({} as IUser);
  const [messageContent, setMessageContent] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState<IArrivalMessage>({} as IArrivalMessage);
  const [modalChatIsOpen , setModalChatIsOpen] = useState(false);

  const sendUserID = (userID: number, username: string) => {
    setUserIDSelected(userID)
    socket.auth = { userID, username };
    socket.connect();
  }

  const selectRecipientUser = (user: IUser) => {
    setRecipientUser(user);
  }

  const submitMessage = () => {
    if (recipientUser && messageContent) {
      const objData: {
        content: string;
        to: string;
        id: string;
        fromSelf ?: boolean;
      } = {
        content: messageContent,
        to: recipientUser.socketID,
        id: uuidv4(),
      }
      socket.emit("private message", objData);
      const userIndex = onlineUsers.findIndex((user: IUser) => user.userID === recipientUser.userID);
      const userSent:any = onlineUsers.find((user: IUser) => user.userID === recipientUser.userID);

      objData.fromSelf = true;
      userSent.messages.push(objData);
      const newOnlineUsers = onlineUsers.filter((user: IUser) => user.userID !== recipientUser.userID)

      newOnlineUsers.splice(userIndex, 0, userSent);
      setOnlineUsers(newOnlineUsers);
    }
  }

  const checkSelectedUser = (user: IUser) => {
    return user.userID === recipientUser?.userID;
  }

  useEffect(() => {
    socket.on("users", (users) => {
      const usersFormat = users.map((user: { messages: never[]; hasNewMensage: boolean; }) => {
        user.messages = [];
        user.hasNewMensage = false;
        return user;
      })
      setOnlineUsers(usersFormat);
    });
  },[]);

  useEffect(() => {
    socket.on("user connected", (user) => {
      const userExisting = onlineUsers.some(({ userID }) => user.userID === userID);
      if (!userExisting) {
        user.messages = [];
        user.hasNewMensage = false;
        setOnlineUsers([...onlineUsers, user]);
      };
    });

    socket.on("user disconnected", (id) => {
      const userExisting = onlineUsers.filter(({ socketID }) => socketID !== id);
      setOnlineUsers([...userExisting]);
    })

    socket.on("connect_error", (err) => {
      if (err.message === "invalid username") {
        console.log("usuario invalido")
      }
    });

  }, [socket, onlineUsers, recipientUser]);

  useEffect(() => {
    socket.on("private message", ({ content, from, id }) => {
      setArrivalMessage({
        content,
        from,
        id,
        fromSelf: false
      })
    });
  }, [])

  useEffect(() => {
    const newArray = onlineUsers.map(user => {
      if(user.userID === recipientUser.userID) {
        user.hasNewMessage = false;
        return user
      }
      return user;
    })

    setOnlineUsers(newArray);
  },[recipientUser]);

  useEffect(() => {
    if (arrivalMessage && onlineUsers.some(({ socketID }) => socketID === arrivalMessage.from)) {
      const indexUser = onlineUsers.findIndex(({ socketID }) => socketID === arrivalMessage.from);
      const userObj: any = onlineUsers.find(({ socketID }) => socketID === arrivalMessage.from);
      userObj.messages.push(arrivalMessage);

      if (!(checkSelectedUser(userObj)) && !(userObj.hasNewMessage)) {
        userObj.hasNewMessage = true;
      }

      const newArray = [...onlineUsers];
      newArray.splice(indexUser, 1 , userObj);
      setOnlineUsers(newArray);
    }
  }, [arrivalMessage])

  return (
    <ChatContext.Provider value={{ userIDSelected, sendUserID, onlineUsers, selectRecipientUser, submitMessage, setMessageContent, recipientUser, modalChatIsOpen, setModalChatIsOpen, setRecipientUser }}>
      {children}
    </ChatContext.Provider>
  )
}

export default ChatProvider;
