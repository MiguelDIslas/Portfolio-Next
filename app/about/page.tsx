"use client";
import { useEffect } from "react";
import TagCloud from "TagCloud";
import { Title } from "@/components/general";
import { getAge } from "@/utils/dateUtils";

/**
 * This component is used to render the about page.
 * @returns {JSX.Element} About page component.
 */
const AboutPage = (): JSX.Element => {
  // Get age from date of birth
  const age = getAge("1999-06-07");
  // Tag cloud
  const container = ".tagcloud";
  // Texts to show in the tag cloud
  const texts = [
    "React",
    "JavaScript",
    "React Native",
    "NestJS",
    ".Net",
    "C#",
    "Laravel",
    "Git",
    "SQL",
    "NextJS",
    "Livewire",
    "Tailwind",
    "Bootstrap",
    "TypeScript",
  ];
  // Options for the tag cloud
  const options = { radius: 250 };

  const init = () => {
    TagCloud(container, texts, options);
  };

  // Render the tag cloud
  useEffect(() => {
    init();
  }, []);

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <div>
        <Title title="About me" />
        <div className="flex flex-col lg:flex-row mt-8 justify-center items-center">
          <div className="w-100 mb-8 lg:mb-0 lg:w-50">
            <p className="py-4">
              {`I'm a self-taught person, born and raised in Chihuahua, Mexico.
              I'm into react ecosystem, I've been working with it for 2 and a half years.
              I'm currently working as a Mobile Developer.`}
              <br />
              {`I like to play games. If I'm not playing games I'm probably watching movies
              or series.`}
            </p>
          </div>
          <div className="w-100 lg:w-50">
            <div className="tagcloud flex justify-center items-center text-primary-color my-3 mx-auto text-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
