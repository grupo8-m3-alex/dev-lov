import { useContext } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/userContext"

const ProtectRouets = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' replace state={{ from: location.pathname }} />
  );
}

export default ProtectRouets