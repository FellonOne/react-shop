import { CatalogState, CatalogActions, CatalogActionTypes } from './types';

const inititalState: CatalogState = {
  data: [],
  isLoading: true,
  error: null,
};

export function catalogReducer(
  state = inititalState,
  action: CatalogActions
): CatalogState {
  switch (action.type) {
    case CatalogActionTypes.FETCH_CATALOG: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case CatalogActionTypes.FETCH_CATALOG_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: null,
      };
    }
    case CatalogActionTypes.FETCH_CATALOG_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
