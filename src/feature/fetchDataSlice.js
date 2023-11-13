import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  data: [],
  forecastData: [],
  favorites: [],
  tempUnit: "celsius",
  error: "",
  currentCity: null,
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
        forecastData: action.payload.cityForecast,
      };
    },
    ADD_FAVORITE: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, { ...action.payload }],
      };
    },
    REMOVE_FAVORITE: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter((f) => {
          f.id !== action.payload.id;
        }),
      };
    },
    FORECAST_DATA_FETCH_SUCCEED: (state, action) => {
      return { ...state, forecastData: action.payload };
    },
    SET_CURRENT_CITY: (state, action) => {
      state.data = action.payload;
    },

    TOGGLE_TEMP_UNIT: (state) => {
      state.tempUnit = state.tempUnit === "celsius" ? "fahrenheit" : "celsius";
    },
  },
});

export const {
  DATA_FETCH_REQUESTED,
  DATA_FETCH_FAILED,
  DATA_FETCH_SUCCEED,
  FORECAST_DATA_FETCH_SUCCEED,
  SET_CURRENT_CITY,
  TOGGLE_TEMP_UNIT,
  ADD_FAVORITE,
  REMOVE_FAVORITE,
} = dataSlice.actions;

export const { actions, reducer } = dataSlice;
