import { timeout } from 'store/utils';
import { serializer } from '../shoes/service';

export const fetchCatalogApi = () =>
  timeout(700)
    .then(() => import('./mock.json'))
    .then(data => data.sections[0].items.slice(30).map(serializer));
