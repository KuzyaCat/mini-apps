import { all, takeEvery, put, call } from 'redux-saga/effects';

import { usersActions } from './users.slice';
import { usersApi } from '../../api/users.api';

export function* setUserWorker() {
  try {
    const response = yield call(usersApi.getUserById);

    yield put(usersActions.setUser({ user: response.data }));
  } catch (err) {
    console.error('usersSaga error', err);
  }
}

export function* setUsersWorker({ payload: { eventId, gender } }) {
  try {
    const response = yield call(usersApi.getUsersWithFilters, eventId, gender);

    yield put(usersActions.setUsers({ users: response.data }));
  } catch (err) {
    console.error('usersSaga error', err);
  }
}

export function* usersWatcher() {
  yield all([
    takeEvery(usersActions.fetchUser, setUserWorker),
    takeEvery(usersActions.fetchUsers, setUsersWorker),
  ]);
}


