import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../constants";

interface ThemeState {
  appTheme: typeof darkTheme | typeof lightTheme;
}

const initialState: ThemeState = {
  appTheme: darkTheme,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark">) => {
      if (action.payload === "light") {
        state.appTheme = lightTheme;
      } else {
        state.appTheme = darkTheme;
      }
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
