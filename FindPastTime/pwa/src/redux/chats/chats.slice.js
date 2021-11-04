import { createSlice } from '@reduxjs/toolkit';

const initialState = { events: null };

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    setChats(state, action) {
      const { chats } = action.payload;
      return {
        ...state,
        chats,
      };
    },

    fetchChats(userId) {},
  },
});

export const chatsActions = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;

