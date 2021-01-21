import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { AppState } from './type';

export const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    router: connectRouter(history),
  });
