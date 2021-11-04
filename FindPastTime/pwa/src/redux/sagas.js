import { all, fork } from 'redux-saga/effects';

import { initAuthorization } from '../api/auth.api';
import { authWatcher } from './auth/auth.saga';
import { eventsWatcher } from './events/events.saga';
import { chatsWatcher } from './chats/chats.saga';
import { usersWatcher } from './users/users.saga';

initAuthorization();

export const rootSaga = function* rootSaga() {
  yield all([
    fork(authWatcher),
    fork(eventsWatcher),
    fork(chatsWatcher),
    fork(usersWatcher),
  ]);
};
