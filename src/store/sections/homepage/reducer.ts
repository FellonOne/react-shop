import { FetchHomeTypes, HomePageActions, HomePageState } from './types';
const initState: HomePageState = {
  isLoading: false,
  error: null,
  data: {
    newest: [],
    popular: [],
  },
};

export function homePageReducer(
  state = initState,
  action: HomePageActions
): HomePageState {
  switch (action.type) {
    case FetchHomeTypes.FETCH_HOMEPAGE: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case FetchHomeTypes.FETCH_HOMEPAGE_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    }
    case FetchHomeTypes.FETCH_HOMEPAGE_FAILURE: {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
