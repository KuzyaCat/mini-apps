import axios from 'axios';

import { API_URL } from './baseApi';

export const eventsApi = {
  getEventsByCity: async (userId) => {
    return await axios.get(`${API_URL}events/city/${userId}`);
  },

  getEventById: async (id) => {
    return await axios.get(`${API_URL}events/${id}`);
  },

  createUserEvent: async ({ userId, eventId }) => {
    return await axios.post(`${API_URL}events/user`, { userId, eventId });
  },
};

