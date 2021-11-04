import { createSelector } from 'reselect';

export const getChatsSelector = createSelector(
  [state => state.chats],
  chatsReducer => chatsReducer.chats,
);

