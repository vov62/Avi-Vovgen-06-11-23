import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "tel aviv",
  cord: {},
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    UPDATE_SEARCH: (state, action) => {
      return { ...state, cityName: action.payload };
    },
    RESET_SEARCH: (state) => {
      state.cityName = "";
    },
    SET_CITY_CODE: (state, action) => {
      state.cord = action.payload;
    },
  },
});

export const { UPDATE_SEARCH, RESET_SEARCH, SET_CITY_CODE } =
  searchSlice.actions;

export const { actions, reducer } = searchSlice;
