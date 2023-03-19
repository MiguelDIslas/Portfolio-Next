import React from "react";
import Image from "next/image";
import { FaGithub,  FaLinkedin } from "react-icons/fa";
import {MdEmail} from "react-icons/md";

import NavItem from "./NavItem";
import SocialMediaIcon from "../general/SocialMediaIcon";
import logo from "@/public/logos/logo.png";

/**
 * Component that displays the navigation bar
 * @returns {JSX.Element} The component Navbar.
 */
const Navbar: React.FC = (): JSX.Element => {
  return (
    <div className="flex justify-between flex-col items-center h-full w-full">
      <div className="w-full flex justify-center border-b-border-color border-b-[1px]">
        <Image className="w-[70%] h-auto prevent-select" src={logo} alt="Logo" priority />
      </div>
      <ul className="w-full h-auto text-center flex flex-col justify-between ">
        <NavItem href="/" text="Home" />
        <NavItem href="/about" text="About" />
        <NavItem href="/resume" text="Resume" />
        <NavItem href="/portfolio" text="Portfolio" />
        <NavItem href="/contact" text="Contact" />
      </ul>
      <footer className="w-full h-auto flex border-t-[1px] border-t-border-color text-center justify-evenly">
        <SocialMediaIcon
          href="https://github.com/MiguelDIslas"
          target="_blank"
          rel="noreferrer"
          title="Github profile"
          Icon={FaGithub}
        />
        <SocialMediaIcon
          href="mailto:miguelangelde15@gmail.com"
          title="Gmail"
          Icon={MdEmail}
        />
        <SocialMediaIcon
          href="https://www.linkedin.com/in/miguel-angel-delgado-10ba8b164"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn profile"
          Icon={FaLinkedin}
        />
      </footer>
    </div>
  );
};

export default Navbar;
