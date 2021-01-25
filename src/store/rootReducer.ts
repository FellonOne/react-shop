import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';
import { AppState } from './type';
import { homePageReducer } from './sections/homepage/reducer';
import { catalogReducer } from './sections/catalog/reducer';

export const createRootReducer = (history: History) =>
  combineReducers<AppState>({
    homePage: homePageReducer,
    catalog: catalogReducer,
    router: connectRouter(history),
  });
