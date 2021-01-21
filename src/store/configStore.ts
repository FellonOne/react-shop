import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';

export const history = createBrowserHistory();

export const configureHistory = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  return createStore(
    createRootReducer(history),
    initialState,
    applyMiddleware(routerMiddleware(history))
  );
};
