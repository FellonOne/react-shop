import { RouterState } from 'connected-react-router';
import { HomePageState } from './sections/homepage/types';

export interface AppState {
  readonly router: RouterState;
  readonly homePage: HomePageState;
}
