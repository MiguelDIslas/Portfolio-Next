import { IconType } from "react-icons";

/**
 * Props for the SmallTitle component.
 * @typedef {Object} SmallTitleProps
 * @property {string} title - Title of the component.
 * @property {IconType} Icon - Icon of the component.
 */
type SmallTitleProps = {
  title: string;
  Icon: IconType;
};

/**
 * Props for the SmallTitle
 * @param {SmallTitleProps} props - Props for the component.
 * @returns {JSX.Element} SmallTitle component.
 */
const SmallTitle = ({ title, Icon }: SmallTitleProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <Icon className="pr-4 text-5xl text-white" />
      <h3 className="text-white text-[2rem] font-bold prevent-select">{title}</h3>
    </div>
  );
};

export default SmallTitle;
