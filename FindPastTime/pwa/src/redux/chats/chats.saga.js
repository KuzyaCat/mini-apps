import { all, takeEvery, put, call } from 'redux-saga/effects';

import { chatsActions } from './chats.slice';
import { chatsApi } from '../../api/chats.api';

export function* setChatsWorker() {
  try {
    const response = yield call(chatsApi.getChats);

    yield put(chatsActions.setChats({ chats: response.data }));
  } catch (err) {
    console.error('chatsSaga error', err);
  }
}

export function* chatsWatcher() {
  yield all([
    takeEvery(chatsActions.fetchChats, setChatsWorker),
  ]);
}

