import { all, takeEvery, put, call } from 'redux-saga/effects';

import { eventsActions } from './events.slice';
import { eventsApi } from '../../api/events.api';

export function* setEventsWorker({ payload: { userId } }) {
  try {
    const response = yield call(eventsApi.getEventsByCity, userId);

    yield put(eventsActions.setEvents({ events: response.data }));
  } catch (err) {
    console.error('eventsSaga error', err);
  }
}

export function* setEventByIdWorker({ payload: { id } }) {
  try {
    const response = yield call(eventsApi.getEventById, id);

    yield put(eventsActions.setEvent({ event: response.data }));
  } catch (err) {
    console.error('eventsSaga error', err);
  }
}

export function* createUserEventWorker({ payload: { userId, eventId } }) {
  try {
    yield call(eventsApi.createUserEvent, { userId, eventId});
    const response = yield call(eventsApi.getEventById, eventId);

    yield put(eventsActions.setEvent({ event: response.data }));
  } catch (err) {
    console.error('eventsSaga error', err);
  }
}

export function* eventsWatcher() {
  yield all([
    takeEvery(eventsActions.fetchEvents, setEventsWorker),
    takeEvery(eventsActions.fetchEventById, setEventByIdWorker),
    takeEvery(eventsActions.createUserEvent, createUserEventWorker),
  ]);
}

