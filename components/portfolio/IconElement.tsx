import { IconType } from "react-icons";

/**
 * Type for the IconElement component
 * @typedef {Object} IconElement
 * @property {IconType} Icon - The icon to be displayed
 * @property {string} title - The title of the icon
 * @property {string} href - The href of the icon
 */
type IconElement = {
  Icon: IconType;
  title: string;
  href: string;
};

/**
 * Component for the icon element
 * @param {IconElement} type - The type of the icon
 * @param {IconType} type.Icon - The icon to be displayed
 * @param {string} type.title - The title of the icon
 * @param {string} type.href - The href of the icon
 * @returns {JSX.Element} The component IconElement.
 */
const IconElement = ({ Icon, title, href }: IconElement): JSX.Element => (
  <li
    className="bg-border-color flex items-center justify-center p-4 rounded-full 
                w-12 h-12 my-0 mx-2 transition-all duration-[0.4s] ease-in-out 
                hover:bg-primary-color"
  >
    <a
      className="flex items-center justify-center transition-all duration-[0.4s] ease-in-out"
      href={href}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      <Icon />
    </a>
  </li>
);

export default IconElement;
