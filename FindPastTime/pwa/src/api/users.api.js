import axios from 'axios';

import { API_URL } from './baseApi';

export const usersApi = {
  getUserById: async (id) => {
    return await axios.get(`${API_URL}users/me`);
  },

  getUsersWithFilters: async (eventId, gender) => {
    return await axios.get(`${API_URL}users/event?event_id=${eventId}&gender=${gender}`);
  },
};


