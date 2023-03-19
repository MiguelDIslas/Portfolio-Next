/**
 * @description - Portfolio data interface
 * @interface IPortofilio
 * @property {string} tech - Technology used
 * @property {string} image - Image path
 * @property {string} link1 - Link 1
 * @property {string} link2 - Link 2
 * @property {string} title - Title
 * @property {string} text - Text
 */
export interface IPortofilio {
  /**
   * @description - Technology used
   */
  tech: string;
  /**
   * @description - Image path
   */
  image: string;
  /**
   * @description - Link for repository
   */
  link1: string;
  /**
   * @description - Link for live demo
   */
  link2: string;
  /**
   * @description - Title
   */
  title: string;
  /**
   * @description - Text description
   */
  text: string;
}
