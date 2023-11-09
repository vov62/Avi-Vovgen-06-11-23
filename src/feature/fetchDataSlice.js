import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  forecastData: [],
  favorites: [],
  error: "",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    DATA_FETCH_REQUESTED: (state) => {
      return { ...state, isLoading: true };
    },
    DATA_FETCH_FAILED: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    DATA_FETCH_SUCCEED: (state, action) => {
      return { ...state, isLoading: false, data: action.payload };
    },
    FORECAST_DATA_FETCH_SUCCEED: (state, action) => {
      return { ...state, forecastData: action.payload };
    },
    // ADD_TO_FAVORITE: (state, action) => {
    //   state.favorites.push(action.payload);
    // }
    ADD_TO_FAVORITE: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      };
    },
  },
});

export const {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEED,
  FORECAST_DATA_FETCH_SUCCEED,
  ADD_TO_FAVORITE,
} = dataSlice.actions;

export const { actions, reducer } = dataSlice;
