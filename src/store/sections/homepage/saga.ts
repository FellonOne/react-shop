import { call, takeLatest } from 'redux-saga/effects';

export function* homePageSaga() {
  yield takeLatest('assa', fetchHomePage);
}

function* fetchHomePage() {
  try {
    const data = yield call(fetchHomePage);
  } catch (err) {}
}
