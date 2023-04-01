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
    "Styled\nComponents",
    "Laravel",
    "Inertia/React",
    "PHP",
    "Git",
    "SQL",
    "Next.js",
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
  });

  return (
    <div className="py-8 px-2 mid:py-18 mid:px-18 md:py-20 md:px-20 prevent-select">
      <div>
        <Title title="About me" />
        <div className="flex flex-col lg:flex-row mt-8">
          <div className="w-100 mb-8 lg:mb-0 lg:w-50">
            <p className="py-4 text-justify">
              {`I'm a self-taught person, born and raised in Delicias, Chihuahua.
              I'm into react ecosystem, I've been working with it for 2 years.
              I'm currently working as a Mobile Developer, and I have experience
              with web development.`}
              <br />
              {`I'm gamer I like to play games like Call of Duty, Elden Ring, and
              many more. If I'm not playing games I'm probably watching movies
              or series.`}
            </p>
            <div className="flex pb-6">
              <div className="pr-12">
                <p className="font-semibold">{"Name"}</p>
                <p className="font-semibold">{"Age"}</p>
                <p className="font-semibold">{"Nationality"} </p>
                <p className="font-semibold">{"Languages"} </p>
                <p className="font-semibold">{"Location"}</p>
              </div>
              <div className="py-[0.3rem]">
                <p>{": Miguel Angel Delgado"}</p>
                <p>{": " + age.toString()}</p>
                <p>{": Mexican"}</p>
                <p>{": Spanish, English"}</p>
                <p>{": Delicias, Chihuahua"}</p>
              </div>
            </div>
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
