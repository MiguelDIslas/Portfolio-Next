"use client"

import React from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";
import { setNavToggle } from "@redux/slices/layout.slice";

/**
 * The props of the component.
 * @typedef {Object} Props
 * @property {string} href - The href of the component.
 * @property {string} text - The text of the component.
 */
type Props = {
  /**
   * The href of the component.
   */
  href: string;
  /**
   * The text of the component.
   */
  text: string;
};

/**
 * Component that displays the navigation item.
 * @param {Props} props - The props of the component.
 * @param {string} props.href - The href of the component.
 * @param {string} props.text - The text of the component.
 * @returns {JSX.Element} The component NavItem.
 */
const NavItem: React.FC<Props> = ({ href, text }: Props): JSX.Element => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const active = pathname === href;
  return (
    <li
      className="flex text-center justify-center prevent-select"
      onClick={() => {
        dispatch(setNavToggle(false));
      }}
    >
      <Link
        href={href}
        className={`w-1/2 relative block text-[transparent] 
        font-[800] decoration-none no-underline py-[0.4rem] tracking-[1.5px] 
        transition-all duration-300 ease-in-out hover:text-white hover:cursor-pointer
        ${active ? "text-white" : "text-siderbar-light-color"}`}
        style={{
          WebkitTextStroke: "1px white",
        }}
      >
        {text}
      </Link>
    </li>
  );
};

export default NavItem;
