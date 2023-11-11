import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import fetchDataReducer from "./rootReducers";
import rootSaga from "./saga/rootSaga";

const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
  reducer: fetchDataReducer,
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;
