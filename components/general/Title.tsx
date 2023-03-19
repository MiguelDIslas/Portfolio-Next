import React from "react";

/**
 * @typedef Props
 * @property {string} title - The title of the page
 */
type Props = {
    title: string;
};

/**
 * This component is used to set the head information of the page.
 * @param {Props} props - The props of the component.
 * @param {string} props.title - The title of the page.
 * @returns {JSX.Element} Head component.
 */
const Title: React.FC<Props> = ({ title }: Props): JSX.Element => {
  return (
    <div className="relative">
      <h2 className="text-white text-[2rem] font-semibold uppercase relative pb-3 sm:text-[3.1rem] prevent-select">
        {title}
      </h2>
    </div>
  );
};

export default Title;
