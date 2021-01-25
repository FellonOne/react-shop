import { all, fork } from 'redux-saga/effects';

import {homePageSaga} from './sections/homepage/saga';

export function* rootSaga() {
  yield all([fork(homePageSaga)]);
}
