import { Sneakers } from 'types';

export interface HomePageState {
  readonly isLoading: boolean;
  readonly data: {
    popular: Sneakers[];
    newest: Sneakers[];
  };
  readonly error: string | null;
}

export enum FetchHomeTypes {
  FETCH_HOMEPAGE = 'shop/homepage/fetch-homepage',
  FETCH_HOMEPAGE_SUCCESS = 'shop/homepage/fetch-homepage-success',
  FETCH_HOMEPAGE_FAILURE = 'shop/homepage/fetch-homepage-failure',
}

export interface FetchHomePageAction {
  type: FetchHomeTypes.FETCH_HOMEPAGE;
}

export interface FetchHomePageSuccessAction {
  type: FetchHomeTypes.FETCH_HOMEPAGE_SUCCESS;
  payload: {
    popular: Sneakers[];
    newest: Sneakers[];
  };
}

export interface FetchHomePageFailureAction {
  type: FetchHomeTypes.FETCH_HOMEPAGE_FAILURE;
  payload: string;
}

export type HomePageActions =
  | FetchHomePageAction
  | FetchHomePageSuccessAction
  | FetchHomePageFailureAction;
