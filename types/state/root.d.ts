import { ILayoutState } from "./layout";
import { IPortfolioState } from "./portfolio.state";

/**
 * The state of the component
 * @interface RootState
 * @property {ILayoutState} layout - The layout state
 * @property {IPortfolioState} portfolio - The portfolio state
 */
export interface RootState {
  /**
   * The layout state
   */
  layout: ILayoutState;

  /**
   * The portfolio state
   */
  portfolio: IPortfolioState;
}
