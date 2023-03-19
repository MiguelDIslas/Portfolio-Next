import React from "react";
import { useSelector } from "react-redux";

import Navbar from "./Navbar";
import { RootState } from "@/types/state/root";

/**
 * Component that displays the navigation bar
 * @returns {JSX.Element} The component Sidebar.
 */
const Sidebar: React.FC = (): JSX.Element => {
  const { navToggle } = useSelector((state: RootState) => state.layout);
  return (
    <div
      className={`w-[15rem] fixed h-screen bg-siderbar-dark-color overflow-hidden transition-all duration-75 ease-in-out z-20
                ${navToggle ? "translate-x-0 " : "large:translate-x-[-100%]"}`}
    >
      <Navbar />
    </div>
  );
};

export default Sidebar;
