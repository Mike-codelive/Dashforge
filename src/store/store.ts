import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from "./themeToggleSlice";
import sidebarReducer from "./sidebarSlice";
import teamReducer from "../features/team/teamSlice";

export const store = configureStore({
  reducer: {
    themeToggle: themeToggleReducer,
    sidebar: sidebarReducer,
    team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
