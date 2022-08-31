import { createContext, ReactNode, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { singIn } from "../services/api";

interface IUserContext {
  children: ReactNode;
}

const UserContext = createContext({});

const UserProvider = ({ children }: IUserContext) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    toast.promise(singIn(), {
      loading: 'Loading',
      success: 'Got the data',
      error: 'Error when fetching',
    });
  },  [])


  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;