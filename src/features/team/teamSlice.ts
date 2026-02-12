import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type TeamState = {
  searchQuery: string;
};

const initialState: TeamState = {
  searchQuery: "",
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<string>) {
      state.searchQuery = action.payload;
    },
    clearSearch(state) {
      state.searchQuery = "";
    },
  },
});

export const { setSearchQuery, clearSearch } = teamSlice.actions;
export default teamSlice.reducer;
