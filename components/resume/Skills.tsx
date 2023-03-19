import Title from "../general/Title";
import HardSkill from "./HardSkill";

import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiLivewire,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

/**
 * This component is used to set the head information of the page.
 * @returns {JSX.Element} Head component.
 */
const Skills = (): JSX.Element => {
  return (
    <div>
      <Title title="Hard Skills" />
      <div className="py-20 px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-12">
          <HardSkill
            name="React / Native"
            Icon={SiReact}
            title="Web and mobile development"
          />
          <HardSkill
            name="Tailwind"
            Icon={SiTailwindcss}
            title="Web and mobile designs"
          />
          <HardSkill name="NextJS" Icon={TbBrandNextjs} />
          <HardSkill name="Laravel" Icon={SiLaravel} />
          <HardSkill name="Typescript" Icon={SiTypescript} />
          <HardSkill name="Javascript" Icon={SiJavascript} />
          <HardSkill
            name="Livewire"
            Icon={SiLivewire}
            title="Applied to client side on laravel projects"
          />
          <HardSkill name="Styled Components" Icon={SiStyledcomponents} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
