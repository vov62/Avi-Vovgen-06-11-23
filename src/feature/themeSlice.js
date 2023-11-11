import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    TOGGLE_THEME: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { TOGGLE_THEME } = themeSlice.actions;
export const { actions, reducer } = themeSlice;
