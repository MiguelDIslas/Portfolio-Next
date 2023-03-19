import { IconType } from "react-icons";

/**
 * IconProps
 * @typedef {Object} IconProps
 * @param href - The link to the icon
 * @param {string} [target] - The target of the link
 * @param {string} [rel] - The rel of the link
 * @param {string} [title] - The title of the link
 * @param Icon - The icon to display
 */
export type IconProps = {
  /**
   * The link to the icon
   */
  href: string;
  /**
   * The target of the link
   */
  target?: string;
  /**
   * The rel of the link
   */
  rel?: string;
  /**
   * The title of the link
   */
  title?: string;
  /**
   * The icon to display
   */
  Icon: IconType;
};
