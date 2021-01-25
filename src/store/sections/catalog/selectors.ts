import { AppState } from 'store/type';

export function getCatalog(state: AppState) {
  return state.catalog.data;
}

export function isLoading(state: AppState) {
  return state.catalog.isLoading;
}
