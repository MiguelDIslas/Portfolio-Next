import React from "react";

/**
 * Props for the resume item.
 * @typedef {Object} ResumeItemProps
 * @property {string} title - Title of the resume item.
 * @property {string} company - Company of the resume item.
 * @property {string} companyUrl - Company url of the resume item.
 * @property {string} description - Description of the resume item.
 * @property {string} date - Date of the resume item.
 * @property {boolean} [isCompany] - Is company of the resume item.
 */
type ResumeItemProps = {
  title: string;
  company: string;
  companyUrl: string;
  description: string;
  date: string;
  isCompany?: boolean
};

/**
 * This component is used to render a resume item.
 * @param {ResumeItemProps} props - Props for the component.
 * @returns {JSX.Element} Resume item component.
 */
const ResumeItem = ({
  title,
  company,
  companyUrl,
  description,
  date,
  isCompany=true,
}: ResumeItemProps): JSX.Element => {
  return (
    <div className="flex justify-between mt-4">
      <div
        className="w-1/4 pl-5 relative 
        before:content-[''] before:absolute before:-left-[10px] before:top-1 before:h-4 before:w-4
        before:rounded-full before:border-2 before:border-border-color before:bg-background-dark-color "
      >
        <p className="inline-block minimum:text-[80%] text-white mt-2 prevent-select">
          {date}
        </p>
      </div>
      <div className="w-3/4">
        <h5 className="text-primary-color text-[2rem] font-bold prevent-select">{title}</h5>
        <div className="py-3">
          <a
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-2xl font-bold cursor-pointer transition-all duration-300
              hover:text-react-color hover:underline hover:decoration-white
            "
            title={`${isCompany ? "Company" : "School"}: website`}
          >
            {company}
          </a>
        </div>
        <p className="prevent-select">{description}</p>
      </div>
    </div>
  );
};

export default ResumeItem;
