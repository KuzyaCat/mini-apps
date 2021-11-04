import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import LogRocket from 'logrocket';

import { rootSaga } from './sagas';
import { createRootReducer } from './reducer';
import history from '../helpers/history';
console.log('history at store', history);

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  createRootReducer(history),
  composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
      LogRocket.reduxMiddleware(),
    ),
  ),
);

store.runSaga = saga => {
  return sagaMiddleware.run(saga);
};

sagaMiddleware.run(rootSaga);
