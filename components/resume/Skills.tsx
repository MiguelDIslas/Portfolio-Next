import Title from "../general/Title";
import HardSkill from "./HardSkill";

import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiLaravel,
  SiNestjs,
  SiCsharp,
  SiBlazor
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
            name="Blazor"
            Icon={SiBlazor}
            title="Web and mobile designs"
          />
          <HardSkill name="Typescript" Icon={SiTypescript} />
          <HardSkill name="C#" Icon={SiCsharp} />
          <HardSkill name="NextJS" Icon={TbBrandNextjs} />
          <HardSkill name="NestJS" Icon={SiNestjs} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
