import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchHomePageError, fetchHomePageSuccess } from './actions';
import { fetchService } from './service';
import { FetchHomeTypes } from './types';

export function* homePageSaga() {
  yield takeLatest(FetchHomeTypes.FETCH_HOMEPAGE, fetchHomePage);
}

function* fetchHomePage(): unknown {
  try {
    const data = yield call(fetchService);
    yield put(fetchHomePageSuccess(data));
  } catch (err) {
    yield put(fetchHomePageError(err.message));
  }
}
