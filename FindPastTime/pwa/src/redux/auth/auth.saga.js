import { all, takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

import { authActions } from './auth.slice';
import { authApi, initAuthorization } from '../../api/auth.api';
import { ROUTES } from '../../constants';

function* checkAuthStatusWorker() {
  try {
    const savedToken = localStorage.getItem('authToken');

    if (savedToken) {
      const { id } = jwtDecode(savedToken);

      yield put(authActions.setAuthData({ token: savedToken, userId: id }));
      yield put(push(ROUTES.MAIN));
      initAuthorization();
    }
  } catch (err) {
    console.error('checkAuthStatusSaga error', err);
  }
}

export function* loginWorker({ payload: { login, password } }) {
  console.log('login');
  try {
    const response = yield call(authApi.login, login, password);
    const token = response?.data?.token;

    if (response.status === 200) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      yield put(authActions.setAuthErrors(response.data));
      return;
    }

    localStorage.setItem('authToken', token);
    yield call(checkAuthStatusWorker);

  } catch (err) {
    // TODO: fix
    yield put(authActions.setAuthErrors({ message: 'Wrong login or password' }));
    console.error('authSaga error', err);
  }
}

export function* logoutWorker() {
  localStorage.removeItem('authToken');
  yield put(push(ROUTES.LOGIN));
}

export function* registrationWorker({
  payload: { login, password, name, city, age, gender, description },
}) {
  try {
    const response = yield call(
      authApi.register,
      login,
      password,
      name,
      city,
      age,
      gender,
      description,
    );
    const token = response?.data?.token;

    if (response.status === 200) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      yield put(authActions.setAuthErrors(response.data));
      return;
    }

    localStorage.setItem('authToken', token);
    yield call(checkAuthStatusWorker);

  } catch (err) {
    // TODO: fix
    yield put(authActions.setAuthErrors({ message: 'User with this login already exists' }));
    console.error('authSaga error', err);
  }
}

export function* authWatcher() {
  console.log('enter auth saga');
  yield all([
    takeEvery(authActions.login, loginWorker),
    takeEvery(authActions.register, registrationWorker),
    takeEvery(authActions.logout, logoutWorker),
    takeEvery(authActions.checkAuthData, checkAuthStatusWorker),
  ]);
}

