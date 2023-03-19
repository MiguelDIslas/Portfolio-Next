import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdMenu } from "react-icons/md";

import Sidebar from "./Sidebar";
import { RootState } from "@/types/state/root";
import { setNavToggle } from "@redux/slices/layout.slice";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

/**
 * The props of the component.
 * @typedef {Object} Props
 * @property {React.ReactNode} children - The children of the component.
 */
type Props = {
  /**
   * The children of the component.
   */
  children: React.ReactNode;
};

/**
 * Component that displays the layout.
 * @param {Props} props - The props of the component.
 * @param {React.ReactNode} props.children - The children of the component.
 * @returns {JSX.Element} The component Layout.
 */
const Layout: React.FC<Props> = ({ children }: Props): JSX.Element => {
  const dispatch = useDispatch();
  const { navToggle } = useSelector((state: RootState) => state.layout);

  return (
    <div className="overflow-hidden">
      <a
        title="Github Code"
        href="https://github.com/MiguelDIslas/Next-Portfolio"
        target="_blank"
        rel="noopener"
        className="w-30 h-10 bg-primary-color flex items-center justify-center rounded-full fixed right-5 bottom-5 text-md px-2 glow-effect cursor-pointer z-10
        transition-all duration-300
        hover:translate-y-[-5px] hover:shadow-lg hover:transition-all hover:duration-300 prevent-select
        "
      >
        Code <FaGithub className="ml-2 text-white" />
      </a>
      <Sidebar />

      <div className="absolute right-[5%] top-[3%] hidden z-[15] large:block">
        <MdMenu
          className="text-[3rem] text-white cursor-pointer"
          onClick={() => {
            dispatch(setNavToggle(!navToggle));
          }}
        />
      </div>
      <div className="ml-0 min-h-screen relative xl:ml-60">{children}</div>
    </div>
  );
};

export default Layout;
