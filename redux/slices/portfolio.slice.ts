import { createSlice } from "@reduxjs/toolkit";
import { IPortfolioState } from "@/types/state/portfolio.state";
import { portfolioData } from "@/data/portfolio";

/**
 * Initial state
 * @constant initialState
 * @type {IPortfolioState}
 */
const initialState: IPortfolioState = {
  portfolios: portfolioData,
  filter: "All",
  filteredPortfolios: portfolioData,
};

/**
 * Portfolio slice
 * @constant portfolioSlice
 */
export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    filterPortfolio: (state, action) => {
      if (state.filter === "All") {
        state.filteredPortfolios = portfolioData;
      } else {
        state.filteredPortfolios = state.portfolios.filter(
          (portfolio) => portfolio.tech === state.filter
        );
      }
    },
    reset: (state, action) => initialState,
  },
});
export const { setFilter, filterPortfolio, reset } = portfolioSlice.actions;
export default portfolioSlice.reducer;
