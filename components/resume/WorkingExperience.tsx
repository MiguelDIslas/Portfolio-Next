import { MdBusinessCenter, MdSchool } from "react-icons/md";
import ResumeItem from "./ResumeItem";
import Title from "./../general/Title";
import SmallTitle from "./../general/SmallTitle";

/**
 * Component for working experience
 * @returns {JSX.Element} Working experience component
 */
const WorkingExperience = (): JSX.Element => {
  return (
    <div>
      <Title title="Resume" />
      <div className="py-20 px-0">
        <div className="pb-12">
          <SmallTitle title="Working Experience" Icon={MdBusinessCenter} />
        </div>
        <div className="border-l-2 border-border-color">
          <ResumeItem
            title="React Native Developer"
            company="Telstock"
            companyUrl="https://www.telstock.net/"
            description="I work with react native, I'm currently using tools like realm,
                    using mongoDB as a database. I'm also using the react native navigation library."
            date="2022 - Current"
          />
          <ResumeItem
            title="ASP.NET Intern"
            companyUrl="http://www.quanto.mx/"
            company="Syseti"
            description="I worked with ASP.NET, I was in charge of maintaining one module of the system and 
            I helped with another modules, I also worked with the
                    database, I also created some stored procedures and functions"
            date="2020 - 2021"
          />
        </div>

        <div className="pt-24">
          <SmallTitle title="Educational Qualifications" Icon={MdSchool} />
        </div>
        <div className="border-l-2 border-border-color">
          <ResumeItem
            title="Computer Science Degree"
            company="Instituto Tecnológico de Delicias"
            companyUrl="https://www.delicias.tecnm.mx/"
            description="Systems Engineer, specialty Agile Software Development. I participated in several contests and got the 3rd and 2nd place."
            date="2017 - 2022"
            isCompany={false}
          />
        </div>
      </div>
    </div>
  );
};

export default WorkingExperience;
