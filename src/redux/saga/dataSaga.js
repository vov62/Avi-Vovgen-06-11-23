import { call, put, takeLatest } from "redux-saga/effects";
import {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEED,
  FORECAST_DATA_FETCH_SUCCEED,
} from "../../feature/fetchDataSlice";
import fetchCityData from "../../api/api";

function* fetchData(actions) {
  // actions.payload has my search value
  //   debugger;
  try {
    const cityDataRes = yield call(fetchCityData, actions.payload);

    // const { lat, lon } = cityDataRes.coord;
    // yield put(SET_CITY_CODE({ lat, lon }));
    // console.log(lat, lon);

    // debugger;
    yield put({ type: DATA_FETCH_SUCCEED, payload: cityDataRes.cityData });

    yield put({
      type: FORECAST_DATA_FETCH_SUCCEED,
      payload: cityDataRes.forecastData,
    });

    // console.log(cityDataRes);
  } catch (error) {
    yield put({ type: DATA_FETCH_FAILED, payload: error.message });
  }
}

function* watchFetchData() {
  //   debugger;
  yield takeLatest(DATA_FETCH_REQUESTED, fetchData);
}

export default watchFetchData;
