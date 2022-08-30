import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-apikenzie.herokuapp.com/',
  timeout: 5000
});

export const singIn = async (data) => {
  return await
    api
      .post('login', data)
      .then(({ data }) => {
        localStorage.setItem("@token_devlov", data.accessToken);
      })
      .catch(err => console.error(err))
}

export const userIsValid = async (token, user) => {
  api.defaults.headers.common["Authorization"] = token
  return await
    api
      .get(`users/${user.id}`)
      .then(res => {
        console.log(res.data);
        return true
      })
      .catch(err => {
        console.error(err);
        return false
      })
}

export const registerUser = async (data) => {
  return await
    api
      .get('register')
      .then(res => {
        console.log(res);
        return true;
      })
      .catch(err => {
        console.log(err);
        return false;
      })
}

