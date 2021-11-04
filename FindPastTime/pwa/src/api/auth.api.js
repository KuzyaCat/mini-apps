import axios from 'axios';

import { API_URL } from './baseApi';
import { isIosDevice } from '../helpers/isIosDevice';

export const authApi = {
  login: async (login, password) => {
    return await axios.post(`${API_URL}auth/login`, {
      login,
      password,
    });
  },

  register: async (login, password, name, city, age, gender, description) => {
    return await axios.post(`${API_URL}auth/registration`, {
      login,
      password,
      name,
      city,
      age,
      gender,
      description,
    });
  },
};

export const initAuthorization = () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    axios.defaults.headers.common.platform = `PWA ${isIosDevice ? 'IOS' : 'Android'}`;
  }
};
