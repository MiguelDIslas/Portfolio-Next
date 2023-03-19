/**
 * Layout state interface
 * @interface ILayoutState
 * @property {boolean} navToggle - Navigation toggle state
 * @property {string} activeNav - Active navigation
 */
export interface ILayoutState {
  /**
   * Navigation toggle state
   */
  navToggle: boolean;

  /**
   * active navigation
   */
  activeNav: string;
}
