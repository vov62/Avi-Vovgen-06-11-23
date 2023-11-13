import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cityName: "tel aviv",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    UPDATE_SEARCH: (state, action) => {
      return { ...state, cityName: action.payload };
    },
    RESET_SEARCH: (state) => {
      return { ...state, cityName: "" };
    },
  },
});

export const { UPDATE_SEARCH, RESET_SEARCH } = searchSlice.actions;

export const { actions, reducer } = searchSlice;
