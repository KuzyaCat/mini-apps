import axios from 'axios';

import { API_URL } from './baseApi';

export const chatsApi = {
  getChats: async () => {
    return await axios.get(`${API_URL}chats/`);
  },
};

