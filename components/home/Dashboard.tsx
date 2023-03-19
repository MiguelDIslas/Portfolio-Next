"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Particle from "../general/Particle";
import SocialMediaIconAnimation from "../general/SocialMediaIconAnimation";

/**
 * This component is used to render the home page.
 * @returns {JSX.Element} Home page component.
 */
const Dashboard = (): JSX.Element => {
  return (
    <div className="w-full min-h-screen relative">
      <Particle />
      <section className="w-[80%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-[4rem] text-center font-bold mb-5 xl:mb-0 prevent-select">
          Hi I'm
          <span className="text-[4rem] text-primary-color ml-2">Miguel Delgado</span>
        </p>
        <p className="text-sm text-justify lg:text-lg lg:text-center font-semibold prevent-select">
          I'm a software developer, I like to create things that live on the
          internet, from websites to applications.
          <br />
          <span className="text-primary-color text-sm lg:text-lg">
            I'm love with JavaScript/Typescript ecosystems.
          </span>
          <br />
          I'm working with React, Nextjs and React Native. I'm currently
          learning NetCore, Unity and improving Typescript.
        </p>
        <div className="flex justify-center mt-4">
          <SocialMediaIconAnimation
            href="https://github.com/MiguelDIslas"
            target="_blank"
            rel="noreferrer"
            title="Github profile"
            Icon={FaGithub}
          />
          <SocialMediaIconAnimation
            href="mailto:miguelangelde15@gmail.com"
            title="Gmail"
            Icon={MdEmail}
          />
          <SocialMediaIconAnimation
            href="https://www.linkedin.com/in/miguel-angel-delgado-10ba8b164"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn profile"
            Icon={FaLinkedin}
          />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
