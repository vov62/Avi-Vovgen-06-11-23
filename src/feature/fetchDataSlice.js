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
    ADD_TO_FAVORITES: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      };
    },
    REMOVE_FROM_FAVORITES: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorites) => favorites.id !== action.payload.id
        ),
      };
    },
  },
});

export const {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEED,
  FORECAST_DATA_FETCH_SUCCEED,
  ADD_TO_FAVORITES,
  REMOVE_FROM_FAVORITES,
} = dataSlice.actions;

export const { actions, reducer } = dataSlice;
