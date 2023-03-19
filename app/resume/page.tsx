import { Skills, WorkingExperience } from "@/components/resume";

/**
 * This component is used to render the resume page.
 * @returns {JSX.Element} Resume page component.
 */
const ResumePage = (): JSX.Element => {
  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20">
      <Skills />
      <WorkingExperience />
    </div>
  );
}

export default ResumePage;