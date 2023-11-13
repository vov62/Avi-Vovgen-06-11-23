import { call, put, takeLatest } from "redux-saga/effects";
import {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEED,
} from "../../redux/feature/fetchDataSlice";
import fetchCityData from "../../api/api";

function* fetchData(actions) {
  try {
    const cityDataRes = yield call(fetchCityData, actions.payload);

    yield put({ type: DATA_FETCH_SUCCEED, payload: cityDataRes });
  } catch (error) {
    yield put({ type: DATA_FETCH_FAILED, payload: error.message });
  }
}

function* watchFetchData() {
  yield takeLatest(DATA_FETCH_REQUESTED, fetchData);
}

//

export { watchFetchData };
