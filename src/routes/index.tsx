import { Route, Routes } from 'react-router';
import Dashboard from '../pages/Dashboard';
import DevLov from '../pages/DevLov';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import ProtectRouets from './ProtectRoutes';

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRouets />}>
        <Route path="/profile/:user_id" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/devlov" element={<DevLov />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default RoutesMain;
