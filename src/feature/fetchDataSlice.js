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
      return { ...state, isLoading: true, error: null };
    },
    DATA_FETCH_FAILED: (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
    DATA_FETCH_SUCCEED: (state, action) => {
      return {
        ...state,
        isLoading: false,
        data: action.payload.cityData,
        forecastData: action.payload.forecastData,
      };
    },
    FORECAST_DATA_FETCH_SUCCEED: (state, action) => {
      return { ...state, forecastData: action.payload };
    },

    ADD_TO_FAVORITES: (state, action) => {
      state.favorites.push(action.payload);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    REMOVE_FROM_FAVORITES: (state, action) => {
      state.favorites = state.favorites.filter(
        (city) => city.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
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
