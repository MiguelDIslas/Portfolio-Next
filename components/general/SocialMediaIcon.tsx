import React from "react";
import { IconProps } from "@/types/components/icon";

/**
 * Component that displays the social media icon.
 * @param {IconProps} props - The props of the component.
 * @param {string} props.href - The href of the icon.
 * @param {string} [props.target] - The target of the icon.
 * @param {string} [props.rel] - The rel of the icon.
 * @param {string} [props.title] - The title of the icon.
 * @param {React.FC} props.Icon - The icon.
 * @returns {JSX.Element} The component SocialMediaIcon.
 */
const SocialMediaIcon: React.FC<IconProps> = ({
  href,
  target,
  rel,
  title,
  Icon,
}: IconProps): JSX.Element => {
  return (
    <a
      className="py-[1.5rem] text-[1.1rem] block text-white"
      href={href}
      {...(target && { target })}
      {...(rel && { rel })}
      {...(title && { title })}
    >
      <Icon />
    </a>
  );
};

export default SocialMediaIcon;
