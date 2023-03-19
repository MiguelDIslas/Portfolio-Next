import { IPortofilio } from "../data/portfolio";

/**
 * Portfolio state interface
 * @interface IPortfolioState
 */
export interface IPortfolioState {
  /**
   * Portfolio data
   */
  portfolios: IPortofilio[];
  /**
   * Filter
   */
  filter: string;
  /**
   * Filtered portfolios
   */
  filteredPortfolios: IPortofilio[];
}
