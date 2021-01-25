import { RouterState } from 'connected-react-router';
import { CatalogState } from './sections/catalog/types';
import { HomePageState } from './sections/homepage/types';

export interface AppState {
  readonly router: RouterState;
  readonly homePage: HomePageState;
  readonly catalog: CatalogState;
}
