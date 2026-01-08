// store/sidebarSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type SidebarState = {
  isOpen: boolean;
  activeAccordionId: string | null;
};

const initialState: SidebarState = {
  isOpen: false,
  activeAccordionId: null,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggle(state) {
      state.isOpen = !state.isOpen;
      if (!state.isOpen) {
        state.activeAccordionId = null;
      }
    },
    setActiveAccordion(state, action: PayloadAction<string | null>) {
      state.activeAccordionId = action.payload;
    },
  },
});

export const { toggle, setActiveAccordion } = sidebarSlice.actions;
export default sidebarSlice.reducer;
