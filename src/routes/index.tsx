import { Route, Routes } from "react-router-dom";
import DevLov from "../pages/DevLov";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/devlov" element={<DevLov />} />
    </Routes>
  )
}

export default RoutesMain;