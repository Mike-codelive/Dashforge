import { createSlice } from "@reduxjs/toolkit";

const getInitialTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "dark" || stored === "light") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const themeToggleSlice = createSlice({
  name: "themeToggle",
  initialState: { value: getInitialTheme() },
  reducers: {
    toggle: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.value);
    },
  },
});

export const { toggle } = themeToggleSlice.actions;
export default themeToggleSlice.reducer;
