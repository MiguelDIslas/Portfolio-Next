import React from "react";
import { IconProps } from "@/types/components/icon";

/**
 * Component that displays the social media icon. It's the same as SocialIcon.tsx but with animation.
 * @param {IconProps} props - The props of the component.
 * @param {string} props.href - The href of the icon.
 * @param {string} [props.target] - The target of the icon.
 * @param {string} [props.rel] - The rel of the icon.
 * @param {string} [props.title] - The title of the icon.
 * @param {React.FC} props.Icon - The icon.
 * @returns {JSX.Element} The component SocialMediaIcon.
 */
const SocialMediaIconAnimation: React.FC<IconProps> = ({
  href,
  target,
  rel,
  title,
  Icon,
}: IconProps): JSX.Element => {
  return (
    <a
      className="border-[2px] border-border-color flex items-center justify-center rounded-full transition-all duration-300 ease-in-out cursor-pointer 
      hover:border-primary-color hover:text-primary-color
      [&:not(:last-child)]:mr-4 z-10"
      href={href}
      {...(target && { target })}
      {...(rel && { rel })}
      {...(title && { title })}
    >
      <Icon className="m-2" />
    </a>
  );
};

export default SocialMediaIconAnimation;
