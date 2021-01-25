import { Sneakers } from 'types';

export interface CatalogState {
  readonly data: Sneakers[];
  readonly isLoading: boolean;
  readonly error: string | null;
}

export enum CatalogActionTypes {
  FETCH_CATALOG = 'shop/catalog/fetch-catalog',
  FETCH_CATALOG_SUCCESS = 'shop/catalog/fetch-catalog-success',
  FETCH_CATALOG_FAILURE = 'shop/catalog/fetch-catalog-failure',
}

export interface FetchCatalogAction {
  type: CatalogActionTypes.FETCH_CATALOG;
}

export interface FetchCatalogSuccessAction {
  type: CatalogActionTypes.FETCH_CATALOG_SUCCESS;
  payload: Sneakers[];
}

export interface FetchCatalogFailureAction {
  type: CatalogActionTypes.FETCH_CATALOG_FAILURE;
  payload: string;
}

export type CatalogActions =
  | FetchCatalogAction
  | FetchCatalogSuccessAction
  | FetchCatalogFailureAction;
