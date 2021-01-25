import { AppState } from 'store/type';

export function getHomePage(state: AppState) {
  return state.homePage.data;
}

export function isLoading(state: AppState) {
  return state.homePage.isLoading;
}
