import axios from 'axios';
import toast from 'react-hot-toast';
import { FormDataDefault } from '../components/Input';

export const api = axios.create({
  baseURL: 'https://json-server-apikenzie.herokuapp.com/',
  timeout: 5000,
});
