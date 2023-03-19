import { IconType } from "react-icons";

/**
 * Props for the HardSkill component.
 * @typedef {Object} HardSkillProps
 * @property {string} name - Name of the skill.
 * @property {IconType} Icon - Icon of the skill.
 * @property {string} [title] - Title of the skill.
 */
type HardSkillProps = {
  name: string;
  Icon: IconType;
  title?: string;
};

/**
 * This component is used to render a hard skill.
 * @param {HardSkillProps} props - Props for the component.
 * @returns {JSX.Element} Hard skill component.
 */
const HardSkill = ({ name, Icon, title }: HardSkillProps): JSX.Element => {
  return (
    <div className="flex items-center">
      <Icon
        className="w-28 h-28 text-white transition-all duration-75 ease-in-out
        hover:text-primary-color hover:drop-shadow-sm cursor-pointer"
        title={title ? title : name}
      />
      <h6 className="ml-5">{name}</h6>
    </div>
  );
};

export default HardSkill;
