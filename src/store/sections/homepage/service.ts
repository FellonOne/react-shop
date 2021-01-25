import { serializer } from '../shoes/service';
import { timeout } from 'store/utils';

export const fetchService = () =>
  timeout(700)
    .then(() => import('./mock.json'))
    .then(loaded => ({
      newest: loaded.sections[0].items.slice(0, 6).map(serializer),
      popular: loaded.sections[0].items.slice(6, 9).map(serializer),
    }));
