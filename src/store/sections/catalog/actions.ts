import { Sneakers } from 'types';
import {
  CatalogActionTypes,
  FetchCatalogAction,
  FetchCatalogFailureAction,
  FetchCatalogSuccessAction,
} from './types';

export function catalogAction(): FetchCatalogAction {
  return {
    type: CatalogActionTypes.FETCH_CATALOG,
  };
}

export function catalogSuccessAction(
  data: Sneakers[]
): FetchCatalogSuccessAction {
  return {
    type: CatalogActionTypes.FETCH_CATALOG_SUCCESS,
    payload: data,
  };
}

export function catalogFailureAction(error: string): FetchCatalogFailureAction {
  return {
    type: CatalogActionTypes.FETCH_CATALOG_FAILURE,
    payload: error,
  };
}
