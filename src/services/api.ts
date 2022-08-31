import axios from 'axios';
import { FormDataDefault } from '../components/Input';

export const api = axios.create({
  baseURL: 'https://json-server-apikenzie.herokuapp.com/',
  timeout: 5000,
});

export const registerUser = async (data: FormDataDefault) => {
  const {
    name,
    email,
    url_avatar,
    password,
    confirmPassword,
    age,
    bio,
    city,
    state,
    gender,
  } = data;
  
  return await api
    .post('register', {
      name,
      email,
      url_avatar,
      password,
      confirmPassword,
      age,
      bio,
      city,
      state,
      gender,
    })
    .then((res) => res)
    .catch((err) => err);
};
