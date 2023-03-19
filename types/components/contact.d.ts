import { IconType } from "react-icons";

/**
 * @typedef {Object} ContactItemProps
 * @param {string} title - The title of the contact item
 * @param {IconType} Icon - The icon to display
 * @param {string} text1 - The first line of text
 * @param {string} text2 - The second line of text
 */
export type ContactItemProps = {
  /**
   * The title of the contact item
   */
  title: string;
  /**
   * The icon to display
   */
  Icon: IconType;
  /**
   * The first line of text
   */
  text1: string;
  /**
   * The second line of text
   */
  text2: string;
};

/**
 * @typedef {Object} InputItemProps
 * @param {string} id - The id of the Input item
 * @param {string} title - The title of the Input item
 * @param {string} [type] - The type of the Input item
 */
export type InputItemProps = {
  /**
   * The id of the Input item
   */
  id: string;
  /**
   * The title of the Input item
   */
  title: string;
  /**
   * The type of the Input item
   */
  type?: string;
};
