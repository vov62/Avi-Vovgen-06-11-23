import { all, fork } from "redux-saga/effects";
import watchFetchData from "./dataSaga";

function* rootSaga() {
  yield all([fork(watchFetchData)]); 
}

export default rootSaga;
