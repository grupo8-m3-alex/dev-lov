import axios from 'axios';
import { FormDataDefault } from '../components/Input';

export const api = axios.create({
  baseURL: 'https://json-server-apikenzie.herokuapp.com/',
  timeout: 5000,
});

export const singIn = async (data) => {
  await api
    .post('login', data)
    .then(({ data }) => {
      localStorage.setItem('@token_devlov', data.accessToken);
    })
    .catch((err) => console.error(err));
};

export const userIsValid = async (token, user) => {
  api.defaults.headers.common['Authorization'] = token;
  return await api
    .get(`users/${user.id}`)
    .then((res) => {
      console.log(res.data);
      return true;
    })
    .catch((err) => {
      console.error(err);
      return false;
    });
};

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
    .then((res) => {
      console.log(res);
      return true;
    })
    .catch((err) => {
      console.log(err);
      return false;
    });
};
