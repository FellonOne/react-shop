import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCatalogApi } from './service';
import { catalogSuccessAction, catalogFailureAction } from './actions';
import { CatalogActionTypes } from './types';

export function* catalogWorkerRegister() {
  yield takeLatest(CatalogActionTypes.FETCH_CATALOG, fetchCatalogWorker);
}

function* fetchCatalogWorker(): unknown {
  try {
    const data = yield call(fetchCatalogApi);

    yield put(catalogSuccessAction(data));
  } catch (error) {
    yield put(catalogFailureAction(error.message));
  }
}
