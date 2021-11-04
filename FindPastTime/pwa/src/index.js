import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { BrowserRouter as Router } from 'react-router-dom';
//import { syncHistoryWithStore } from 'react-router-redux'

import './index.css';
import { store } from './redux/store';
import browserHistory from './helpers/history';
import App from './App';
import { isIosDevice } from './helpers/isIosDevice';

//const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

