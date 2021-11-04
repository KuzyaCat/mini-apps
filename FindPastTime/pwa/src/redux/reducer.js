import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { authReducer } from './auth/auth.slice';
import { eventsReducer } from './events/events.slice';
import { chatsReducer } from './chats/chats.slice';
import { usersReducer } from './users/users.slice';

export const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    events: eventsReducer,
    chats: chatsReducer,
    users: usersReducer,
  });
