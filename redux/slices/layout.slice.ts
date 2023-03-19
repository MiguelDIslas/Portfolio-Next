import { createSlice } from "@reduxjs/toolkit";
import { ILayoutState } from "@/types/state/layout";

/**
 * Initial state
 * @constant initialState
 * @type {layoutState}
 */
const initialState: ILayoutState = {
  navToggle: false,
  activeNav: "/",
};

/**
 * Layout slice
 * @constant layoutSlice
 */
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setNavToggle: (state, action) => {
      state.navToggle = !state.navToggle;
    },
    setActiveNav: (state, action) => {
      state.activeNav = action.payload;
    },
  },
});
export const { setNavToggle, setActiveNav } = layoutSlice.actions;
export default layoutSlice.reducer;
