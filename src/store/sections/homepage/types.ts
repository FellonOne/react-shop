export const enum FetchHomeState {
  FETCH_HOMEPAGE = 'shop/homepage/fetch-homepage',
  FETCH_HOMEPAGE_SUCCESS = 'shop/homepage/fetch-homepage-success',
  FETCH_HOMEPAGE_FAILURE = 'shop/homepage/fetch-homepage-failure',
}

export interface FetchHomePageAction {
  type: FetchHomeState.FETCH_HOMEPAGE;
}

export interface FetchHomePageSuccessAction {
  type: FetchHomeState.FETCH_HOMEPAGE_SUCCESS;
}

export interface FetchHomePageFailureAction {
  type: FetchHomeState.FETCH_HOMEPAGE_FAILURE;
}
