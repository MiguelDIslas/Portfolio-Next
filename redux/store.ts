import { Store, configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layout.slice";
import portfolioSlice from "./slices/portfolio.slice";
import { RootState } from "@/types/state/root";
/**
 * The store of the application
 * @constant store
 * @type {Store<RootState>}
 */
export const store: Store<RootState> = configureStore({
  reducer: {
    layout: layoutSlice,
    portfolio: portfolioSlice,
  },
});
