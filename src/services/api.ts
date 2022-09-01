import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://json-server-apikenzie.herokuapp.com/',
  timeout: 5000,
});
