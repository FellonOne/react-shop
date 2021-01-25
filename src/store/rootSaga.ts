import { all, fork } from 'redux-saga/effects';
import { catalogWorkerRegister } from './sections/catalog/saga';

import { homePageSaga } from './sections/homepage/saga';

export function* rootSaga() {
  yield all([fork(homePageSaga), fork(catalogWorkerRegister)]);
}
