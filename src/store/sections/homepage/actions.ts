import { Sneakers } from 'types';
import {
  FetchHomePageAction,
  FetchHomePageFailureAction,
  FetchHomePageSuccessAction,
  FetchHomeTypes,
} from './types';

export function fetchHomePage(): FetchHomePageAction {
  return {
    type: FetchHomeTypes.FETCH_HOMEPAGE,
  };
}

export function fetchHomePageSuccess(data: {
  popular: Sneakers[];
  newest: Sneakers[];
}): FetchHomePageSuccessAction {
  return {
    type: FetchHomeTypes.FETCH_HOMEPAGE_SUCCESS,
    payload: data,
  };
}

export function fetchHomePageError(error: string): FetchHomePageFailureAction {
  return {
    type: FetchHomeTypes.FETCH_HOMEPAGE_FAILURE,
    payload: error,
  };
}
