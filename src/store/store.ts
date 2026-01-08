import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from "./themeToggleSlice";
import sidebarReducer from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    themeToggle: themeToggleReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
